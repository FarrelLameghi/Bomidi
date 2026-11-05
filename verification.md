# Catatan Verifikasi — Minimarket Kita

Status: daftar pemeriksaan untuk website minimarket. Hasil harus diisi setelah implementasi minimarket benar-benar dijalankan dan diuji. Hasil dari proyek lain tidak otomatis membuktikan website ini telah lulus pengujian.

## 1. Pemeriksaan fungsi
- [ ] Katalog memuat minimal 8 produk yang datanya telah diperiksa.
- [ ] Pencarian dan filter kategori dapat digunakan bersamaan.
- [ ] Hasil kosong menampilkan pesan dan opsi reset.
- [ ] Produk dengan ID sama digabung di satu baris keranjang.
- [ ] Jumlah hanya menerima integer 1–99.
- [ ] Subtotal dihitung sebagai harga satuan × jumlah.
- [ ] Total merupakan penjumlahan semua subtotal.
- [ ] Contoh hitung: 2 × Rp50.000 ditambah 1 × Rp10.000 = Rp110.000.
- [ ] Keranjang valid pulih setelah reload.
- [ ] JSON rusak, versi tidak dikenal, produk hilang, dan storage yang ditolak ditangani dengan aman.
- [ ] Harga terbaru dari katalog digunakan saat keranjang dimuat.
- [ ] Input pengguna ditampilkan sebagai teks, bukan HTML.
- [ ] Nomor WhatsApp usaha kosong membuat tombol pesanan nonaktif.
- [ ] Tautan WhatsApp berisi draf yang benar dan pengguna harus mengirimnya sendiri.

## 2. Pemeriksaan tampilan dan aksesibilitas
- [ ] Tidak ada overflow horizontal pada lebar 320, 360, 768, dan 1280 CSS px.
- [ ] Konten tetap terbaca pada zoom browser 200%.
- [ ] Navigasi dan semua kontrol utama dapat digunakan dengan keyboard.
- [ ] Fokus terlihat dan urutan fokus masuk akal.
- [ ] Semua input memiliki label dan pesan error yang jelas.
- [ ] Gambar informatif memiliki alt yang sesuai.
- [ ] Kontras warna diperiksa.
- [ ] Tidak ada error JavaScript atau aset yang gagal dimuat.

## 3. Pemeriksaan privasi dan batas sistem
- [ ] Nama dan nomor kontak tidak disimpan dalam `localStorage`.
- [ ] Nama dan nomor kontak tidak ditulis ke console.
- [ ] Penjelasan di dekat tombol WhatsApp menyebutkan bahwa rincian akan dibuka di WhatsApp.
- [ ] Tidak ada klaim stok real-time atau pesanan berhasil sebelum konfirmasi manual.
- [ ] Harga, katalog, nomor WhatsApp, alamat, jam operasional, dan kebijakan transaksi sudah diverifikasi pemilik toko.

## 4. Kesiapan rilis
Sebelum rilis, isi catatan berikut:
- Tanggal pengujian: belum diisi.
- Browser/perangkat yang diuji: belum diisi.
- Hasil pengujian otomatis: belum dijalankan.
- Hasil pengujian manual: belum dijalankan.
- URL hosting: belum tersedia.
- Catatan masalah yang tersisa: belum diisi.

Website belum boleh dinyatakan siap rilis sampai pemeriksaan yang relevan telah dijalankan, masalah penting diperbaiki, dan data usaha dikonfirmasi.
