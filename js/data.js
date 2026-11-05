export const CATEGORIES = Object.freeze([
  { id: 'all', name: 'Semua produk' },
  { id: 'bahan-pokok', name: 'Bahan pokok' },
  { id: 'protein', name: 'Protein' },
  { id: 'mie', name: 'Mi & pasta' },
  { id: 'minuman', name: 'Minuman' },
  { id: 'bumbu', name: 'Bumbu dapur' },
]);

export const PRODUCTS = Object.freeze([
  { id: 'beras-premium', name: 'Beras Premium', category: 'bahan-pokok', description: 'Beras pulen untuk sajian keluarga setiap hari.', specification: '5 kg · kemasan utuh', price: 72500, icon: '🍚', tag: 'Pilihan keluarga' },
  { id: 'beras-medium', name: 'Beras Medium', category: 'bahan-pokok', description: 'Beras berkualitas untuk stok dapur harian.', specification: '5 kg · kemasan utuh', price: 65000, icon: '🌾', tag: 'Stok rumah' },
  { id: 'gula-pasir', name: 'Gula Pasir', category: 'bahan-pokok', description: 'Pemanis untuk minuman dan aneka masakan.', specification: '1 kg · kemasan utuh', price: 18000, icon: '🧂', tag: 'Kebutuhan dapur' },
  { id: 'tepung-terigu', name: 'Tepung Terigu', category: 'bahan-pokok', description: 'Tepung serbaguna untuk masakan dan kue.', specification: '1 kg · kemasan utuh', price: 14000, icon: '🌾', tag: 'Serbaguna' },
  { id: 'minyak-1l', name: 'Minyak Goreng', category: 'bahan-pokok', description: 'Minyak goreng jernih untuk masakan sehari-hari.', specification: '1 liter · pouch', price: 19000, icon: '🫗', tag: 'Praktis' },
  { id: 'minyak-2l', name: 'Minyak Goreng 2L', category: 'bahan-pokok', description: 'Kemasan hemat untuk kebutuhan memasak keluarga.', specification: '2 liter · pouch', price: 36500, icon: '🫗', tag: 'Lebih hemat' },
  { id: 'garam', name: 'Garam Halus', category: 'bumbu', description: 'Pelengkap rasa untuk berbagai hidangan.', specification: '500 g · kemasan utuh', price: 5000, icon: '🧂', tag: 'Bumbu dasar' },
  { id: 'telur', name: 'Telur Ayam', category: 'protein', description: 'Sumber protein serbaguna untuk menu keluarga.', specification: '1 kg · sekitar 15–17 butir', price: 30000, icon: '🥚', tag: 'Protein harian' },
  { id: 'sarden', name: 'Sarden Saus Tomat', category: 'protein', description: 'Lauk praktis dengan saus tomat gurih.', specification: '155 g · kaleng', price: 12000, icon: '🐟', tag: 'Lauk praktis' },
  { id: 'kornet', name: 'Kornet Sapi', category: 'protein', description: 'Lauk siap olah untuk pelengkap hidangan.', specification: '198 g · kaleng', price: 22000, icon: '🥫', tag: 'Siap diolah' },
  { id: 'mie-goreng', name: 'Mi Instan Goreng', category: 'mie', description: 'Mi goreng praktis untuk teman kapan saja.', specification: '1 bungkus', price: 3500, icon: '🍜', tag: 'Favorit' },
  { id: 'mie-kuah', name: 'Mi Instan Kuah', category: 'mie', description: 'Mi kuah hangat dengan bumbu pilihan.', specification: '1 bungkus', price: 3500, icon: '🍜', tag: 'Hangat & nikmat' },
  { id: 'bihun', name: 'Bihun Jagung', category: 'mie', description: 'Bihun pilihan untuk sup atau tumisan.', specification: '320 g · kemasan utuh', price: 11000, icon: '🥢', tag: 'Mudah diolah' },
  { id: 'susu-uht', name: 'Susu UHT', category: 'minuman', description: 'Susu siap minum untuk stok keluarga.', specification: '1 liter · kemasan utuh', price: 21000, icon: '🥛', tag: 'Simpan praktis' },
  { id: 'kopi', name: 'Kopi Instan', category: 'minuman', description: 'Kopi praktis untuk menemani aktivitas.', specification: '10 sachet · 1 pak', price: 14000, icon: '☕', tag: 'Teman pagi' },
  { id: 'teh', name: 'Teh Celup', category: 'minuman', description: 'Teh celup nikmat untuk dinikmati hangat.', specification: '25 kantong · 1 kotak', price: 12000, icon: '🍵', tag: 'Seduh kapan saja' },
  { id: 'kecap', name: 'Kecap Manis', category: 'bumbu', description: 'Kecap manis untuk pelengkap masakan.', specification: '275 ml · botol', price: 16000, icon: '🍶', tag: 'Rasa rumahan' },
  { id: 'saus', name: 'Saus Sambal', category: 'bumbu', description: 'Saus sambal untuk teman aneka hidangan.', specification: '335 ml · botol', price: 15000, icon: '🌶️', tag: 'Pedas nikmat' },
  { id: 'margarin', name: 'Margarin', category: 'bumbu', description: 'Untuk memasak, menumis, dan olesan roti.', specification: '200 g · kemasan utuh', price: 9000, icon: '🧈', tag: 'Serbaguna' },
  { id: 'kaldu', name: 'Kaldu Ayam Bubuk', category: 'bumbu', description: 'Penyedap rasa untuk masakan rumahan.', specification: '100 g · kemasan utuh', price: 8000, icon: '🍲', tag: 'Sedapkan masakan' },
]);

export const findProduct = (id) => PRODUCTS.find((product) => product.id === id);
export const filterProducts = (query, category) => {
  const keyword = query.trim().toLocaleLowerCase('id-ID');
  return PRODUCTS.filter((product) =>
    (category === 'all' || product.category === category) &&
    `${product.name} ${product.description} ${product.specification}`.toLocaleLowerCase('id-ID').includes(keyword));
};
