-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 29 Des 2021 pada 14.47
-- Versi server: 10.4.22-MariaDB
-- Versi PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pwl-db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `administrasi`
--

CREATE TABLE `administrasi` (
  `id_admin` int(11) NOT NULL,
  `nama_admin` varchar(100) DEFAULT NULL,
  `admin_username` varchar(100) DEFAULT NULL,
  `admin_password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `administrasi`
--

INSERT INTO `administrasi` (`id_admin`, `nama_admin`, `admin_username`, `admin_password`) VALUES
(3252, 'MUHAMMAD ABYAN ZHAFRAN DAFFA', 'zhafran', 'hai123'),
(3272, 'BILAL MUHTASYIMBILAH', 'bilal', 'hai123'),
(3291, 'GALANG DIKA PERKASA', 'galang', 'hai123'),
(3298, 'IGNATIUS TEGAR SAPUTRA', 'tegar', 'hai123'),
(3299, 'CHRISTIAN ERWIN NUGROHO', 'erwin', 'hai123'),
(3300, 'FANNI FADHILA', 'fanni', 'hai123');

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer`
--

CREATE TABLE `customer` (
  `id_customer` int(11) NOT NULL,
  `nama_customer` varchar(100) DEFAULT NULL,
  `alamat_customer` varchar(100) DEFAULT NULL,
  `nomor_customer` int(11) DEFAULT NULL,
  `customer_username` varchar(100) DEFAULT NULL,
  `customer_password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `id_kategori` int(11) NOT NULL,
  `nama_kategori` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `kategori`
--

INSERT INTO `kategori` (`id_kategori`, `nama_kategori`) VALUES
(1, 'Pistol'),
(2, 'Sniper'),
(3, 'Laras Panjang');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pembayaran`
--

CREATE TABLE `pembayaran` (
  `id_pembayaran` int(11) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `jumlah` int(11) DEFAULT NULL,
  `total_harga` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `nama_produk` varchar(100) NOT NULL,
  `id_kategori` int(11) DEFAULT NULL,
  `harga` int(11) NOT NULL,
  `stok_barang` int(11) NOT NULL,
  `merk_barang` varchar(100) NOT NULL,
  `link_gambar` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `produk`
--

INSERT INTO `produk` (`id`, `nama_produk`, `id_kategori`, `harga`, `stok_barang`, `merk_barang`, `link_gambar`, `created_at`, `updated_at`) VALUES
(1, 'Pistol Angin PCP Model Feinwerkbau Model P11', 1, 23000000, 23, 'Feinwerkbau', '', NULL, NULL),
(2, 'Pistol Angin PCP Feinwerkbau P8X Import', 1, 29000000, 33, 'Feinwerkbau', '', NULL, NULL),
(3, 'FEINWERKBAU Pistol Match PCP P8 X', 1, 29800000, 14, 'Feinwerkbau', '', NULL, NULL),
(4, 'Steyr LG110 High Power Black QF', 2, 25900000, 30, 'steyr', '', NULL, NULL),
(5, 'Senapan Angin PCP STEYR STEYR CHALLENGE FIELD TARGET', 2, 34900000, 20, 'steyr', '', NULL, NULL),
(16, 'Steyr LG110 High Power Black QF', NULL, 1200, 14, 'steyr', NULL, '2021-12-29 06:39:52', '2021-12-29 06:39:52');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tim`
--

CREATE TABLE `tim` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `nim` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tim`
--

INSERT INTO `tim` (`id`, `nama`, `nim`, `created_at`, `updated_at`) VALUES
(1, 'Ignatius Tegar S', '19.11.3298', '2021-12-26 10:38:43', '2021-12-26 10:38:43'),
(2, 'Bilal Muhtasyimbilah', '19.11.3272', '2021-12-26 10:38:43', '2021-12-26 10:38:43'),
(3, 'M. Abyan Zhafran D', '19.11.3252', '2021-12-26 10:38:43', '2021-12-26 10:38:43'),
(4, 'Fanni Fadhila', '19.11.3300', '2021-12-26 10:38:43', '2021-12-26 10:38:43'),
(5, 'Christian Erwin Nugroho', '19.11', '2021-12-26 10:38:43', '2021-12-26 10:38:43'),
(6, 'galang', '19.111.32', '2021-12-26 10:38:43', '2021-12-26 03:42:18'),
(7, 'bambang', '19.11.32253', '2021-12-26 03:43:48', '2021-12-26 03:43:48');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `administrasi`
--
ALTER TABLE `administrasi`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indeks untuk tabel `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id_customer`);

--
-- Indeks untuk tabel `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indeks untuk tabel `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD PRIMARY KEY (`id_pembayaran`),
  ADD KEY `id_customer` (`id_customer`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indeks untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kategori` (`id_kategori`);

--
-- Indeks untuk tabel `tim`
--
ALTER TABLE `tim`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `administrasi`
--
ALTER TABLE `administrasi`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3301;

--
-- AUTO_INCREMENT untuk tabel `customer`
--
ALTER TABLE `customer`
  MODIFY `id_customer` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `pembayaran`
--
ALTER TABLE `pembayaran`
  MODIFY `id_pembayaran` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT untuk tabel `tim`
--
ALTER TABLE `tim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD CONSTRAINT `pembayaran_ibfk_1` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id_customer`),
  ADD CONSTRAINT `pembayaran_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id`);

--
-- Ketidakleluasaan untuk tabel `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `produk_ibfk_1` FOREIGN KEY (`id_kategori`) REFERENCES `kategori` (`id_kategori`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
