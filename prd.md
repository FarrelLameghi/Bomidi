# Product Requirement Document — Minimarket Kita

Status: dokumen kebutuhan untuk MVP website minimarket. Website belum dianggap selesai atau dipublikasikan hanya karena dokumen ini tersedia. Nama toko, katalog, harga, kontak, dan kebijakan transaksi harus dikonfirmasi pemilik usaha.

## 1. Visi produk
Memudahkan pembeli menemukan produk kebutuhan sehari-hari, melihat harga, menyusun keranjang, dan mengirim rincian belanja melalui website berbahasa Indonesia yang ringan serta mudah digunakan di ponsel.

## 2. Masalah yang dipecahkan
- Pembeli kesulitan melihat pilihan produk dan harga tanpa bertanya satu per satu.
- Pesanan melalui percakapan sering tidak mencantumkan nama barang atau jumlah secara lengkap.
- Pembeli ingin menghitung perkiraan total sebelum menghubungi toko.
- Pengelola membutuhkan rincian pesanan yang rapi untuk memeriksa stok dan menindaklanjuti pembelian.

## 3. Target pengguna
| Pengguna | Kebutuhan utama |
| --- | --- |
| Pelajar dan mahasiswa | Menemukan kebutuhan harian dengan cepat dan melihat harga |
| Pembeli rutin | Mencari produk tertentu dan menyusun keranjang |
| Keluarga | Memilih beberapa jenis produk dengan jumlah berbeda |
| Pengelola minimarket | Menerima rincian permintaan untuk memeriksa stok dan harga |

## 4. Ruang lingkup MVP
1. Beranda berisi pengenalan toko, ajakan melihat katalog, cara belanja, dan kontak.
2. Katalog produk berisi nama, kategori, deskripsi singkat, foto/ilustrasi lokal, dan harga satuan.
3. Pencarian berdasarkan nama serta filter kategori yang dapat digunakan bersamaan. Contoh kategori: makanan dan minuman, kebutuhan rumah tangga, perawatan diri, produk kebersihan, alat tulis, dan kebutuhan bayi.
4. Keranjang: tambah produk, ubah jumlah, hapus produk, dan tampilkan subtotal.
5. Perhitungan otomatis: subtotal produk = harga satuan × jumlah; total = penjumlahan semua subtotal.
6. Formulir nama dan nomor WhatsApp opsional sesuai kebutuhan operasional, serta ringkasan sebelum membuka WhatsApp toko.
7. Penyimpanan keranjang di browser yang sama menggunakan `localStorage`, dengan pemulihan aman jika data rusak.
8. Informasi cara pemesanan, pembayaran, pengambilan/pengiriman jika tersedia, FAQ, kontak, dan pemberitahuan bahwa stok perlu dikonfirmasi.
9. Tata letak responsif dan kontrol yang dapat digunakan dengan keyboard.

### Di luar MVP
Akun pengguna, panel admin, stok real-time, pembayaran online, database transaksi, program loyalitas, dan pelacakan pesanan. Pengelola memperbarui katalog melalui berkas sumber.

## 5. Aturan bisnis
- Mata uang menggunakan IDR; harga disimpan sebagai bilangan bulat rupiah dan ditampilkan dengan format Indonesia.
- Jumlah per produk harus bilangan bulat 1–99. Batas ini merupakan batas teknis, bukan informasi stok.
- Subtotal produk = harga satuan × jumlah. Total belanja = jumlah seluruh subtotal.
- Harga di katalog merupakan acuan tampilan. Pengelola perlu memeriksa harga dan ketersediaan sebelum menyetujui pesanan.
- Ongkos kirim, diskon, biaya tambahan, dan pajak tidak dihitung kecuali secara eksplisit dibuat sebagai fitur dan datanya tersedia.
- Pesanan melalui WhatsApp bukan transaksi yang otomatis berhasil. Pesanan baru disepakati setelah pengelola mengonfirmasi stok, harga, metode pembayaran, dan cara penyerahan barang.
- Website tidak mengirim pesan WhatsApp secara otomatis. Pengguna harus menekan tombol kirim sendiri.

## 6. Alur utama
Buka beranda → telusuri katalog → cari/filter → tambah produk → atur jumlah → periksa keranjang dan total → isi kontak bila diperlukan → buka WhatsApp → kirim pesan → pengelola mengonfirmasi secara manual.

## 7. Kriteria penerimaan
- Pencarian dan filter bekerja bersamaan; hasil kosong memiliki pesan dan tombol reset.
- Produk dengan ID sama digabung dalam satu baris keranjang.
- Keranjang kosong tidak dapat diajukan; jumlah tidak valid ditolak dengan pesan jelas.
- Contoh hitung: 2 produk seharga Rp50.000 per unit dan 1 produk seharga Rp10.000 menghasilkan total Rp110.000.
- Draf WhatsApp memuat nama/kontak jika diisi, nama dan jumlah produk, rincian harga, total, serta permintaan konfirmasi stok.
- Jika nomor WhatsApp toko belum diatur, tombol pengajuan dinonaktifkan.
- Muat ulang memulihkan keranjang yang valid; kegagalan `localStorage` tidak menghentikan penggunaan katalog.
- Pada lebar 360 px tidak muncul gulir horizontal halaman; kontrol utama dapat digunakan dengan keyboard.

## 8. Metrik keberhasilan
Sasaran awal, bukan hasil yang sudah diukur:
- Minimal 4 dari 5 peserta dapat menyusun pesanan tanpa bantuan.
- Median waktu menyusun pesanan maksimal 3 menit.
- Minimal 90% permintaan mencantumkan produk dan jumlah.
- Semua skenario perhitungan yang disepakati lolos pengujian.
- Alur utama berfungsi pada lebar 360, 768, dan 1280 px.

## 9. Risiko dan dependensi
Katalog dapat tidak sesuai dengan stok atau harga terbaru. Tampilkan keterangan bahwa stok dan harga akhir perlu dikonfirmasi. Nomor WhatsApp, alamat, jam operasional, katalog, harga, foto berizin, serta kebijakan pembayaran/pengambilan/pengiriman/retur perlu disediakan pemilik toko.
