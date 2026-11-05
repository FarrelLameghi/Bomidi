# Panduan Pengembangan — Minimarket Kita

## 1. Cakupan dan urutan kerja
Dokumen ini menjadi dasar implementasi website statis HTML, CSS, dan JavaScript. Baca berurutan: `prd.md` → `tech_stack.md` → `arsitektur.md` → `ui.ux.md`. Gunakan “Minimarket Kita” sebagai nama sementara sampai pemilik toko menentukan identitasnya.

## 2. Prasyarat
- Editor kode dan browser modern.
- Python 3 untuk menjalankan server lokal.
- Git opsional untuk kontrol versi; Node.js opsional untuk pemeriksaan sintaks/pengujian.
- Data usaha sebelum peluncuran: nama toko, nomor WhatsApp internasional, alamat, jam buka, katalog dan harga, foto berizin, serta kebijakan pembayaran, pengambilan/pengiriman, dan retur.
- Jangan gunakan nomor contoh sebagai penerima pesanan aktif. Jika nomor asli belum tersedia, nonaktifkan tombol WhatsApp.

## 3. Langkah implementasi
1. **Siapkan struktur:** buat `index.html`, `css/styles.css`, dan modul dalam `js/` sesuai `arsitektur.md`.
2. **Definisikan konfigurasi:** masukkan nama usaha, kontak publik, alamat, dan jam operasional di `js/config.js`. Nomor WhatsApp menggunakan kode negara dan digit saja, tanpa `+`, spasi, atau awalan nol lokal.
3. **Buat katalog:** masukkan minimal 8 produk contoh dari beberapa kategori. Setiap produk memiliki ID unik, nama, kategori, deskripsi, harga satuan integer positif, path gambar lokal, dan alt. Tandai data sebagai contoh sampai diverifikasi.
4. **Bangun HTML semantik:** header, hero, katalog, keranjang, formulir/ringkasan, cara belanja, FAQ, kontak, footer, dan `noscript`. Muat `js/app.js` dengan `type="module"`.
5. **Terapkan CSS mobile-first:** token warna, tipografi, grid kartu, kontrol formulir, status/error, dan `focus-visible`. Pada layar kecil gunakan satu kolom.
6. **Implementasikan katalog:** pencarian tanpa membedakan huruf besar/kecil, filter kategori, jumlah hasil, dan keadaan kosong. Pencarian dan filter harus dapat digabungkan.
7. **Implementasikan keranjang:** satu sumber state; tambah, ubah jumlah, dan hapus berdasarkan ID. Tolak jumlah selain integer 1–99.
8. **Implementasikan hitung harga:** subtotal = harga satuan × jumlah; total = jumlah seluruh subtotal. Format rupiah memakai `Intl.NumberFormat`.
9. **Implementasikan penyimpanan:** simpan hanya versi skema, ID produk, dan jumlah. Tangani JSON rusak, versi tidak dikenal, produk yang sudah dihapus, dan akses storage yang ditolak tanpa crash.
10. **Implementasikan pesanan:** validasi data formulir, tampilkan ringkasan, lalu bentuk tautan WhatsApp dari state terbaru dengan `encodeURIComponent`. Jangan otomatis mengirim pesan atau mengosongkan keranjang.
11. **Lengkapi konten:** jelaskan konfirmasi stok/harga, metode pembayaran, pengambilan/pengiriman, dan penggunaan data saat beralih ke WhatsApp. Jangan mengarang alamat, stok, testimoni, atau ketentuan transaksi.
12. **Verifikasi:** jalankan pemeriksaan di bawah, perbaiki masalah, dan catat hasil sebelum deployment.

## 4. Menjalankan lokal
Dari direktori proyek setelah berkas aplikasi dibuat:
```bash
python3 -m http.server 5500 --bind 127.0.0.1
```
Buka `http://localhost:5500`. Hentikan dengan Ctrl+C. Jangan mengandalkan membuka `index.html` melalui `file://` karena ES modules perlu dilayani melalui HTTP. Tidak perlu `npm install` atau proses build untuk website dasar ini.

## 5. Aturan penulisan kode
- Gunakan indentasi 2 spasi, UTF-8, nama file huruf kecil, dan kebab-case untuk kelas CSS serta ID HTML.
- Variabel/fungsi JavaScript memakai camelCase; konstanta konfigurasi memakai UPPER_SNAKE_CASE.
- Gunakan `const` secara default dan `let` saat perlu mutasi; hindari `var` dan inline handler seperti `onclick`.
- Pisahkan data, state, logika, dan render.
- Jangan menghitung total dengan membaca teks harga dari DOM; gunakan data katalog.
- Gunakan `Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })`.
- Render data dinamis melalui `textContent` atau DOM API. Jangan memasukkan input pengguna ke `innerHTML`.
- Tangani kegagalan `localStorage` dan validasi input secara eksplisit.
- Jangan mencatat nama atau nomor kontak ke console.
- Gunakan aset lokal dengan nama deskriptif dan catat lisensinya bila relevan.
- Jangan memasukkan token, rahasia, atau data pelanggan ke repository.

## 6. Pemeriksaan sebelum rilis
| Skenario | Hasil yang diharapkan |
| --- | --- |
| Katalog dibuka | Semua produk tampil tanpa error console atau aset hilang |
| Cari nama + pilih kategori | Hasil memenuhi kedua kondisi; reset mengembalikan katalog |
| Tambah produk sama dua kali | Satu baris dengan jumlah 2 |
| Jumlah 0, negatif, desimal, atau 100 | Ditolak dengan pesan jelas |
| 2 produk Rp50.000 + 1 produk Rp10.000 | Total Rp110.000 |
| Keranjang kosong atau kontak invalid | Pesanan ditolak dan ada penjelasan |
| Reload, JSON rusak, atau storage ditolak | State valid dipulihkan atau aplikasi pulih dengan aman |
| Produk dihapus/harga diubah di katalog | ID hilang diabaikan; harga terbaru dipakai |
| Nama mengandung `<`, `&`, tanda kutip, atau baris baru | Ditampilkan sebagai teks dan URL tetap ter-encode |
| Nomor usaha kosong | Tombol WhatsApp tidak aktif |
| WhatsApp dibuka | Draf lengkap; pengguna masih perlu menekan kirim |
| Keranjang berubah setelah ringkasan | Ringkasan harus diperiksa ulang |
| Lebar 360, 768, 1280 px dan zoom 200% | Konten terbaca dan kontrol tidak terpotong |
| Keyboard tanpa mouse | Semua aksi utama dapat dijalankan |

Periksa juga reflow 320 CSS px, kontras, alt gambar, label formulir, dan reduced motion. Pemeriksaan sintaks tidak menggantikan pemeriksaan alur di browser.

## 7. Proses deployment statis
1. Pastikan data usaha benar, aset berizin, nomor tujuan valid, dan pemeriksaan penerimaan lulus.
2. Siapkan paket publik yang hanya berisi `index.html`, `css/`, `js/`, dan `assets/`.
3. Jalankan server lokal dengan folder paket sebagai root dan periksa tautan serta path aset.
4. Unggah paket ke penyedia hosting statis yang mendukung HTTPS.
5. Pada URL HTTPS hasil hosting, uji pencarian, keranjang, perhitungan, dan pembukaan draf WhatsApp tanpa mengirim pesan uji ke pihak lain.
6. Catat URL, tanggal rilis, versi sumber, paket yang diunggah, dan hasil pemeriksaan.

## 8. Rollback dan pemeliharaan
Simpan paket rilis sebelumnya. Jika rilis baru bermasalah, unggah ulang paket sebelumnya dan periksa alur utama. Untuk pembaruan katalog, jaga ID produk tetap stabil, periksa harga, dan ulangi pengujian hitung.

## 9. Definition of Done
Implementasi selesai setelah fitur dan kriteria penerimaan di `prd.md` terpenuhi, data usaha dikonfirmasi, aksesibilitas dasar diperiksa, aset serta console bersih dari error, dan hasil pengujian dicatat. Deployment baru dianggap selesai setelah URL dapat diakses dan pemeriksaan dasar lulus.
