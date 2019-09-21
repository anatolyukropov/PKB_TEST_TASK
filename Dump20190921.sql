-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: pkb
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `calendar`
--

DROP TABLE IF EXISTS `calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calendar` (
  `Cal_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar`
--

LOCK TABLES `calendar` WRITE;
/*!40000 ALTER TABLE `calendar` DISABLE KEYS */;
INSERT INTO `calendar` VALUES ('2011-01-01'),('2011-02-01'),('2011-03-01'),('2011-04-01'),('2011-05-01'),('2011-06-01'),('2011-07-01'),('2011-08-01'),('2011-09-01'),('2011-10-01'),('2011-11-01'),('2011-12-01'),('2012-01-01'),('2012-02-01'),('2012-03-01'),('2012-04-01'),('2012-05-01'),('2012-06-01'),('2012-07-01'),('2012-08-01'),('2012-09-01'),('2012-10-01'),('2012-11-01'),('2012-12-01'),('2013-01-01'),('2013-02-01'),('2013-03-01'),('2013-04-01'),('2013-05-01'),('2013-06-01');
/*!40000 ALTER TABLE `calendar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `debt`
--

DROP TABLE IF EXISTS `debt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `debt` (
  `id_person` int(11) NOT NULL,
  `id_debt` int(10) NOT NULL AUTO_INCREMENT,
  `id_portfolio` int(11) NOT NULL,
  `Debt_sum` int(11) NOT NULL,
  PRIMARY KEY (`id_debt`),
  KEY `id_person_idx` (`id_person`),
  KEY `id_portfolio_idx` (`id_portfolio`),
  CONSTRAINT `id_person` FOREIGN KEY (`id_person`) REFERENCES `person` (`id_person`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_portfolio` FOREIGN KEY (`id_portfolio`) REFERENCES `portfolio` (`id_portfolio`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `debt`
--

LOCK TABLES `debt` WRITE;
/*!40000 ALTER TABLE `debt` DISABLE KEYS */;
INSERT INTO `debt` VALUES (1,1,1,100),(1,2,2,200),(3,3,1,300),(4,4,3,400);
/*!40000 ALTER TABLE `debt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `id_payment` int(11) NOT NULL AUTO_INCREMENT,
  `id_debt` int(11) NOT NULL,
  `Payment_sum` int(11) NOT NULL,
  `Date` date NOT NULL,
  PRIMARY KEY (`id_payment`),
  KEY `id_debt_idx` (`id_debt`),
  CONSTRAINT `id_debt` FOREIGN KEY (`id_debt`) REFERENCES `debt` (`id_debt`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,1,10,'2012-05-12'),(2,1,20,'2012-05-28'),(3,3,30,'2012-06-10'),(4,4,10,'2012-12-01');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `person`
--

DROP TABLE IF EXISTS `person`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `person` (
  `id_person` int(11) NOT NULL AUTO_INCREMENT,
  `FIO` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_person`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `person`
--

LOCK TABLES `person` WRITE;
/*!40000 ALTER TABLE `person` DISABLE KEYS */;
INSERT INTO `person` VALUES (1,'Иванов И.И.'),(2,'Петров. И.И'),(3,'Сидоров И.И'),(4,'Сергеев И.И.');
/*!40000 ALTER TABLE `person` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolio`
--

DROP TABLE IF EXISTS `portfolio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `portfolio` (
  `id_portfolio` int(11) NOT NULL AUTO_INCREMENT,
  `Portfolio_name` varchar(45) NOT NULL,
  `Sign_date` date NOT NULL,
  `End_date` date NOT NULL,
  PRIMARY KEY (`id_portfolio`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolio`
--

LOCK TABLES `portfolio` WRITE;
/*!40000 ALTER TABLE `portfolio` DISABLE KEYS */;
INSERT INTO `portfolio` VALUES (1,'PORTFOLIO_1','2011-01-01','2013-01-21'),(2,'PORTFOLIO_2','2012-05-06','2012-09-20'),(3,'PORTFOLIO_3','2012-11-21','2013-03-16'),(4,'PORTFOLIO_4','2012-12-01','2013-06-11');
/*!40000 ALTER TABLE `portfolio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-21 22:32:17
