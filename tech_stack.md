# Teknologi — Minimarket Kita

## 1. Prinsip pemilihan
MVP menggunakan website statis HTML, CSS, dan JavaScript murni. Tujuannya mudah dipelajari, dapat dijalankan tanpa proses build, dan murah dioperasikan.

## 2. Stack yang dipilih
| Lapisan | Pilihan | Alasan |
| --- | --- | --- |
| Struktur halaman | HTML5 semantik | Struktur konten dan aksesibilitas tanpa framework |
| Tampilan | CSS3, Flexbox, Grid, media query | Tampilan responsif tanpa dependensi UI |
| Logika browser | JavaScript ES modules | Memisahkan katalog, keranjang, dan formulir |
| Framework | Tidak digunakan | Mengurangi kompleksitas MVP |
| Katalog | Array objek pada `js/data.js` | Mudah ditinjau dan diperbarui melalui kode |
| Penyimpanan browser | `localStorage` | Memulihkan keranjang pada perangkat dan origin yang sama |
| Database server | Tidak digunakan pada MVP | Belum ada akun, stok bersama, atau transaksi server |
| Integrasi pesanan | Tautan WhatsApp `wa.me` | Membuka draf yang diperiksa dan dikirim sendiri oleh pengguna |
| Hosting rencana | Cloudflare Pages atau hosting statis HTTPS lain | Tidak memerlukan server aplikasi |
| Kontrol versi | Git | Meninjau perubahan dan mengembalikan versi |
| Server pengembangan | Python 3 `http.server` | Menjalankan ES modules melalui HTTP |
| Pemeriksaan | Browser DevTools; Node.js opsional | Memeriksa interaksi, responsivitas, dan kesalahan JavaScript |

Prosedur dan ketersediaan fitur hosting perlu diperiksa kembali saat deployment. Tidak ada SDK cloud dalam kode aplikasi.

## 3. Kompatibilitas
Targetkan browser modern Chrome, Edge, Firefox, dan Safari pada desktop maupun ponsel yang masih didukung produsennya. Tidak mendukung Internet Explorer. Jika memungkinkan, periksa minimal satu browser Chromium dan satu browser lain.

## 4. Pengelolaan data
- `localStorage` hanya menyimpan versi skema, ID produk, dan jumlah.
- Nama serta nomor kontak hanya berada di memori formulir sampai pengguna membuka WhatsApp; jangan simpan dalam `localStorage` atau log.
- Katalog sumber menjadi acuan harga; jangan percaya harga atau total dari data keranjang yang disimpan.
- Penyimpanan browser bukan database bersama dan tidak menyediakan stok atau transaksi.
- Jangan menaruh token, password, atau rahasia di frontend. Nomor usaha yang digunakan untuk tautan WhatsApp bersifat publik.

## 5. Aset dan performa
Gunakan aset lokal dengan hak penggunaan jelas, format WebP/AVIF bila tersedia, ukuran gambar eksplisit, dan lazy loading untuk gambar di bawah area awal. Gunakan font sistem. Target awal total aset halaman sekitar 1 MB atau lebih kecil dan tidak ada kesalahan console pada alur utama.

## 6. Pengembangan berikutnya
Jika dibutuhkan stok bersama, akun, pembayaran, dan riwayat pesanan, tambahkan backend serta database. Validasi harga, stok, dan transaksi harus dilakukan di server; `localStorage` tidak boleh menjadi dasar konfirmasi pembayaran atau stok.
