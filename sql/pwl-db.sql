-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2021 at 11:48 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.33

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
-- Table structure for table `administrasi`
--

CREATE TABLE `administrasi` (
  `id_admin` int(11) NOT NULL,
  `nama_admin` varchar(100) DEFAULT NULL,
  `admin_username` varchar(100) DEFAULT NULL,
  `admin_password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `administrasi`
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
-- Table structure for table `customer`
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
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id_kategori` int(11) NOT NULL,
  `nama_kategori` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id_kategori`, `nama_kategori`) VALUES
(1, 'Pistol'),
(2, 'Sniper'),
(3, 'Laras Panjang');

-- --------------------------------------------------------

--
-- Table structure for table `pembayaran`
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
-- Table structure for table `produk`
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
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `nama_produk`, `id_kategori`, `harga`, `stok_barang`, `merk_barang`, `link_gambar`, `created_at`, `updated_at`) VALUES
(1, 'Pistol Angin PCP Model Feinwerkbau Model P11', 1, 23000000, 23, 'Feinwerkbau', '', NULL, NULL),
(2, 'Pistol Angin PCP Feinwerkbau P8X Import', 1, 29000000, 33, 'Feinwerkbau', '', NULL, NULL),
(3, 'FEINWERKBAU Pistol Match PCP P8 X', 1, 29800000, 14, 'Feinwerkbau', '', NULL, NULL),
(4, 'Steyr LG110 High Power Black QF', 2, 25900000, 30, 'Steyr', '', NULL, NULL),
(5, 'Senapan Angin PCP STEYR STEYR CHALLENGE FIELD TARGET', 2, 34900000, 20, 'Steyr', '', NULL, NULL),
(9, 'mamen', NULL, 1212, 12, 'adw', NULL, '2021-12-23 03:08:25', '2021-12-25 05:45:53'),
(13, 'something good', NULL, 13, 13, 'something good', NULL, '2021-12-25 06:15:58', '2021-12-25 06:15:58');

-- --------------------------------------------------------

--
-- Table structure for table `tim`
--

CREATE TABLE `tim` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `nim` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tim`
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
-- Indexes for table `administrasi`
--
ALTER TABLE `administrasi`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id_customer`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indexes for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD PRIMARY KEY (`id_pembayaran`),
  ADD KEY `id_customer` (`id_customer`),
  ADD KEY `id_produk` (`id_produk`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kategori` (`id_kategori`);

--
-- Indexes for table `tim`
--
ALTER TABLE `tim`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administrasi`
--
ALTER TABLE `administrasi`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3301;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id_customer` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pembayaran`
--
ALTER TABLE `pembayaran`
  MODIFY `id_pembayaran` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tim`
--
ALTER TABLE `tim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD CONSTRAINT `pembayaran_ibfk_1` FOREIGN KEY (`id_customer`) REFERENCES `customer` (`id_customer`),
  ADD CONSTRAINT `pembayaran_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id`);

--
-- Constraints for table `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `produk_ibfk_1` FOREIGN KEY (`id_kategori`) REFERENCES `kategori` (`id_kategori`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
