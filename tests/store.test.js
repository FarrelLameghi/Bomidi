import test from 'node:test';
import assert from 'node:assert/strict';
import { CATEGORIES, PRODUCTS, filterProducts } from '../js/data.js';
import { money, quote, removeItem, setQuantity } from '../js/cart.js';
import { emptyState, loadState, sanitizeState, saveState, STORAGE_KEY } from '../js/storage.js';
import { buildMessage, buildWhatsAppUrl, normalizePhone, validBusinessNumber, validateCheckout } from '../js/checkout.js';

const state = () => ({ ...emptyState(), items: [{ productId: 'beras-premium', quantity: 2 }, { productId: 'telur', quantity: 1 }] });
const contact = { name: 'Rani Utami', phone: '+62 812-3456-7890' };

test('20 unique products cover every grocery category and search combines product details with filters', () => {
  assert.equal(PRODUCTS.length, 20);
  assert.equal(new Set(PRODUCTS.map((product) => product.id)).size, 20);
  for (const category of CATEGORIES.slice(1)) assert.ok(PRODUCTS.some((product) => product.category === category.id));
  assert.equal(filterProducts(' BERAS ', 'bahan-pokok').length, 2);
  assert.equal(filterProducts('beras', 'protein').length, 0);
  assert.equal(filterProducts('keluarga', 'all').length > 0, true);
  assert.equal(filterProducts('', 'all').length, 20);
  assert.ok(PRODUCTS.every((product) => product.price > 0 && product.icon));
});

test('shopping cart merges product quantities, rejects invalid quantities, and totals by unit price', () => {
  let items = setQuantity([], 'beras-premium', 1);
  items = setQuantity(items, 'beras-premium', 2);
  assert.equal(items.length, 1);
  assert.equal(items[0].quantity, 2);
  for (const value of [0, -1, 1.5, 100, NaN, '2']) assert.throws(() => setQuantity(items, 'beras-premium', value), RangeError);
  assert.throws(() => setQuantity(items, 'unknown', 1), RangeError);
  assert.deepEqual(removeItem(items, 'beras-premium'), []);
  assert.equal(quote(state()).total, 175000);
  assert.equal(quote(state()).units, 3);
  assert.equal(money(72500), 'Rp 72.500');
});

test('storage only saves valid cart items and handles corrupted or unavailable browser storage', () => {
  let stored;
  const storage = { setItem: (key, value) => { assert.equal(key, STORAGE_KEY); stored = value; }, getItem: () => stored };
  assert.ok(saveState(state(), () => storage));
  assert.equal(stored.includes('Rani'), false);
  assert.equal(stored.includes('price'), false);
  assert.deepEqual(loadState(() => storage).state, state());
  assert.equal(loadState(() => ({ getItem: () => '{bad' })).failed, true);
  assert.equal(loadState(() => { throw Error('denied'); }).failed, true);
  assert.equal(saveState(state(), () => { throw Error('quota'); }), false);
  assert.deepEqual(sanitizeState({ schemaVersion: 2, items: state().items }), emptyState());
});

test('storage drops unknown IDs, invalid quantities, duplicate items, and injected fields', () => {
  const draft = state();
  draft.items.push({ productId: 'unknown', quantity: 2 }, { productId: 'mie-goreng', quantity: 100 }, { productId: 'telur', quantity: 5 }, null);
  draft.items[0].price = 1;
  assert.deepEqual(sanitizeState(draft), state());
});

test('contact validation supports local and international phones and rejects malformed input', () => {
  assert.equal(normalizePhone('0812 3456 7890'), '6281234567890');
  assert.equal(normalizePhone('+62 (812) 3456-7890'), '6281234567890');
  for (const value of ['123', '0812<script>', '0812+3456789', '1234567890123456']) assert.equal(normalizePhone(value), '');
  assert.equal(validateCheckout(state(), contact), null);
  assert.equal(validateCheckout(emptyState(), contact).field, 'cart-heading');
  assert.equal(validateCheckout(state(), { ...contact, name: ' ' }).field, 'customer-name');
  assert.equal(validateCheckout(state(), { ...contact, name: 'A\nB' }).field, 'customer-name');
  assert.equal(validateCheckout(state(), { ...contact, phone: 'abc' }).field, 'customer-phone');
});

test('WhatsApp order draft includes item quantities and total without claiming confirmation', () => {
  const message = buildMessage(state(), contact);
  assert.ok(message.includes('175.000'));
  assert.ok(message.includes('Beras Premium × 2'));
  assert.ok(message.includes('pesanan menunggu konfirmasi'));
  const url = new URL(buildWhatsAppUrl('12025550123', state(), contact));
  assert.equal(url.hostname, 'wa.me');
  assert.equal(url.searchParams.get('text'), message);
  assert.equal(validBusinessNumber(''), false);
  assert.equal(validBusinessNumber('+62812345678'), false);
  assert.throws(() => buildWhatsAppUrl('', state(), contact));
});
