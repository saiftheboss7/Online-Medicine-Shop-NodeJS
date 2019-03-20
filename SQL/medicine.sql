-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 20, 2019 at 12:53 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medicine`
--

-- --------------------------------------------------------

--
-- Table structure for table `order_products`
--

DROP TABLE IF EXISTS `order_products`;
CREATE TABLE IF NOT EXISTS `order_products` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `product_id` int(10) NOT NULL,
  `quantity` int(10) NOT NULL,
  `total_cost` int(10) NOT NULL,
  `orderedBy` varchar(30) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `orderDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_products`
--

INSERT INTO `order_products` (`id`, `product_id`, `quantity`, `total_cost`, `orderedBy`, `email`, `phone`, `orderDate`) VALUES
(2, 2, 3, 900, 'test', 'test@outlook.com', '1521332872', '2019-03-20 11:43:26'),
(4, 2, 1, 300, 'ASd', 'saasd@gmail.com', '123456', '2019-03-20 11:53:39'),
(5, 2, 3, 900, 'asd', 'afdf@outlook.com', '123123', '2019-03-20 11:54:39'),
(6, 2, 3, 900, 'asd', 'afdf@outlook.com', '123123', '2019-03-20 11:54:55'),
(7, 4, 4, 800, 'Sick Leave', 'test@outlook.com', '1521332872', '2019-03-20 11:55:23'),
(9, 2, 3, 900, 'ShakaLaka', 'cool@outlook.com', '1521332872', '2019-03-20 11:59:03');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int(10) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(30) NOT NULL,
  `image` varchar(255) NOT NULL,
  `vendor` varchar(50) NOT NULL,
  `type` varchar(30) NOT NULL,
  `availability` varchar(3) NOT NULL DEFAULT 'YES',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `category`, `image`, `vendor`, `type`, `availability`) VALUES
(2, 'Amoxasilin', 300, 'Good medicine', 'Aspirine', 'dist/img/medicine.png', 'Biopharma', 'Solid', 'Yes'),
(3, 'Napa', 200, 'Headache', 'Paracetamol', 'dist/img/medicine.png', 'Square', 'Solid', 'Yes'),
(4, 'Napa', 200, 'Headache', 'Paracetamol', 'dist/img/medicine.png', 'Square', 'Solid', 'Yes'),
(5, 'Napa', 200, 'asd', 'Cold', 'dist/img/medicine.png', 'ads', 'Solid', 'Yes'),
(7, 'Napa Extra', 200, 'Good for migrane', 'Aspirine', 'dist/img/medicine.png', 'Alco', 'Solid', 'Yes');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `type` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `type`) VALUES
(1, 'Khalid', 'khalid', 'khalid@gmail.com', '123456', 'ADMIN'),
(2, 'Md Saif Hassan', 'saif', 'saif@gmail.com', '123456', 'ADMIN'),
(3, 'test', 'saifthebo', 'test@outlook.com', '12345', 'CUSTOMER'),
(4, 'ShakaLaka', 'saifthe', 'asd@outlook.com', '01191355619', 'CUSTOMER'),
(5, 'cassy', 'cassy', 'casy@outlook.com', '123456', 'ADMIN');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
