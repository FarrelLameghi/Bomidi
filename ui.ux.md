# Panduan UI/UX — Minimarket Kita

## 1. Arah desain
Tampilan bersih, ramah, dan modern seperti toko kebutuhan harian. Fokus utama adalah menemukan produk, memahami harga, dan menyusun keranjang. Semua teks antarmuka menggunakan bahasa Indonesia. Nama merek sementara: Minimarket Kita.

## 2. Token visual awal
| Elemen | Nilai/pedoman |
| --- | --- |
| Latar utama | `#F7F9F5` |
| Permukaan kartu | `#FFFFFF` |
| Teks utama | `#17251B` |
| Teks sekunder | `#46554A` |
| Warna utama | `#237A3B`, dengan teks putih |
| Aksen | `#F4C542`, gunakan teks gelap pada latar aksen |
| Kesalahan | `#B42318`, selalu disertai teks |
| Font | `system-ui, sans-serif` |
| Teks dasar | 16 px, line-height 1.5–1.6 |
| Radius | Kartu 16 px, input/tombol 10 px |
| Spasi | Kelipatan 4/8 px; jarak antarbagian 48–80 px |
| Lebar konten | Maksimum 1200 px, padding sisi minimal 16 px |

Periksa kontras warna termasuk keadaan hover, fokus, dan disabled.

## 3. Susunan halaman
Header → hero → katalog → keranjang dan formulir → cara belanja → syarat/FAQ → kontak dan footer. Pada desktop, keranjang dapat menjadi kolom kanan katalog. Pada ponsel, tampilkan keranjang di bawah katalog dan sediakan tautan menuju keranjang. Hindari modal pada MVP agar alur keyboard lebih sederhana.

## 4. User journey
| Tahap | Tujuan pengguna | Respons antarmuka |
| --- | --- | --- |
| Mengenal | Memastikan toko sesuai kebutuhan | Judul toko, informasi layanan, tombol “Lihat produk” |
| Menemukan | Memilih produk | Pencarian, filter, foto, deskripsi, harga satuan |
| Menyusun | Mengatur isi belanja | Tambah produk, ubah jumlah, hapus, indikator keranjang |
| Menghitung | Mengetahui total | Subtotal per produk dan total belanja |
| Memeriksa | Menghindari kesalahan | Ringkasan produk, jumlah, harga, kontak bila diperlukan |
| Menghubungi | Meminta konfirmasi toko | Tombol “Pesan via WhatsApp” dan penjelasan bahwa pengguna harus mengirim pesan |

## 5. Wireframe
### Desktop
```text
┌──────────────────────────────────────────────────────────┐
│ Minimarket Kita    Produk  Cara belanja  FAQ  Kontak      │
├──────────────────────────────────────────────────────────┤
│ Belanja kebutuhan harian dengan mudah    Foto produk     │
│ [Lihat produk]                                            │
├────────────────────────────────────┬─────────────────────┤
│ Katalog                            │ Keranjang (3 item)  │
│ [Cari produk...]                   │ Produk / jumlah     │
│ [Semua] [Makanan] [Rumah tangga]   │ Subtotal dan total  │
│ [Kartu] [Kartu] [Kartu]            │ Nama / WhatsApp     │
│ [Kartu] [Kartu] [Kartu]            │ [Periksa pesanan]   │
├────────────────────────────────────┴─────────────────────┤
│ Cara belanja → Syarat dan FAQ → Kontak → Footer           │
└──────────────────────────────────────────────────────────┘
```

### Ponsel
```text
┌────────────────────────────┐
│ Minimarket Kita [Keranjang] │
│ Judul dan deskripsi        │
│ [Lihat produk]             │
│ [Cari produk...]           │
│ [Kategori ▼]               │
│ [Kartu produk]             │
│ [Kartu produk]             │
│ Keranjang dan jumlah       │
│ Subtotal dan total         │
│ Formulir dan ringkasan     │
│ [Pesan via WhatsApp]       │
│ Cara belanja / FAQ / kontak│
└────────────────────────────┘
```

## 6. Komponen dan keadaan
- **Navigasi:** tautan anchor, fokus terlihat, dan skip link menuju konten utama.
- **Kartu produk:** gambar dengan rasio tetap, nama, deskripsi singkat, harga seperti “Rp5.000 / unit”, tombol “Tambah”. Jangan menampilkan klaim stok tersedia jika belum diverifikasi.
- **Pencarian/filter:** label jelas, jumlah hasil, tombol reset jika tidak ada hasil; pencarian dan kategori dapat digabungkan.
- **Kontrol jumlah:** tombol kurang/tambah serta input bilangan berlabel; minimum 1, maksimum 99. Penghapusan melalui tombol “Hapus”.
- **Ringkasan:** nama produk, jumlah, harga satuan, subtotal, dan total; keranjang kosong menampilkan petunjuk untuk memilih produk.
- **Formulir kontak:** bila digunakan, nama 2–80 karakter setelah trim. Nomor WhatsApp dinormalisasi dengan menghapus spasi/tanda hubung/kurung; terima awalan 08 maupun 62, tetapi jangan mengklaim validasi menjamin nomor terdaftar.
- **Pemeriksaan pesanan:** tampilkan ringkasan dalam halaman, sediakan “Ubah pesanan” dan “Pesan via WhatsApp”. Perubahan keranjang mengharuskan pemeriksaan ulang.
- **Pemberitahuan:** penambahan produk dan kegagalan penyimpanan memakai area status; hindari notifikasi yang merebut fokus.
- **FAQ:** gunakan elemen native `details` dan `summary`.

## 7. Contoh microcopy
- Keranjang kosong: “Keranjang masih kosong. Pilih produk untuk mulai belanja.”
- Hasil kosong: “Produk tidak ditemukan. Coba kata lain atau reset filter.”
- Jumlah tidak valid: “Masukkan jumlah bulat antara 1 dan 99.”
- Penyimpanan gagal: “Keranjang dapat digunakan, tetapi belum bisa disimpan pada browser ini.”
- Sebelum WhatsApp: “Rincian pesanan akan dibuka di WhatsApp. Kirim pesan untuk meminta konfirmasi harga dan stok. Total ini merupakan perkiraan.”
- Nomor toko belum dikonfigurasi: “Pemesanan melalui WhatsApp belum tersedia.”

## 8. Aksesibilitas
Target implementasi mengacu pada prinsip WCAG 2.2 tingkat AA, dengan verifikasi sebelum mengklaim kepatuhan.
- Gunakan `lang="id"`, landmark semantik, satu `h1`, dan urutan heading logis.
- Semua fungsi dapat digunakan melalui keyboard.
- Setiap input memiliki `label`; error dihubungkan melalui `aria-describedby` dan `aria-invalid`.
- Setelah validasi gagal, fokus ke field salah pertama. Pembaruan keranjang memakai `aria-live="polite"`.
- Target kontras teks normal minimal 4.5:1 dan teks besar 3:1.
- Target sentuh minimal 44 × 44 CSS px, fokus terlihat, dan tidak tertutup elemen sticky.
- Gambar informatif memiliki alt; gambar dekoratif memakai alt kosong.
- Dukung zoom 200% dan reflow hingga 320 CSS px.
- Hormati `prefers-reduced-motion`.

## 9. Validasi pengalaman
Uji tambah beberapa produk, ubah jumlah, hapus produk, periksa total, dan buka WhatsApp. Ulangi dengan keyboard serta layar kecil. Catat hambatan pengguna dan perbaiki sebelum peluncuran.
