-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: dev_art
-- ------------------------------------------------------
-- Server version	5.7.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `departamentos`
--

DROP TABLE IF EXISTS `departamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departamentos` (
  `id` int(11) NOT NULL,
  `Denominacion` varchar(80) NOT NULL,
  `localidad_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `localidad_id` (`localidad_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departamentos`
--

LOCK TABLES `departamentos` WRITE;
/*!40000 ALTER TABLE `departamentos` DISABLE KEYS */;
INSERT INTO `departamentos` VALUES (1,'Administración',1),(2,'Soporte',2),(3,'Recursos Humanos',3),(10,'departamento 10',1);
/*!40000 ALTER TABLE `departamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `apellido` varchar(80) NOT NULL,
  `comision` double DEFAULT NULL,
  `Departamento_id` int(11) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `fechaalta` date DEFAULT NULL,
  `puesto_id` int(11) DEFAULT NULL,
  `sueldo` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Departamento_id` (`Departamento_id`),
  KEY `puesto_id` (`puesto_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'García',500,1,45,'2022-01-15',1,10000),(2,'Martínez',300,2,30,'2023-03-20',2,13000),(3,'López',400,1,38,'2021-06-10',3,2200),(4,'Hernández',NULL,3,25,'2023-07-01',4,11500),(5,'Fernández',200,2,29,'2022-11-25',1,2500),(6,'Pérez',600,1,40,'2022-02-10',2,2800),(7,'Sánchez',100,2,35,'2023-08-15',3,2300),(8,'Ramírez',NULL,3,27,'2023-05-05',4,12000),(9,'Torres',400,1,33,'2021-09-30',1,3500),(10,'Vázquez',150,2,31,'2022-12-12',2,1900),(11,'Morales',250,3,36,'2023-01-18',3,2700),(12,'Jiménez',NULL,1,28,'2022-04-22',4,12200),(13,'Cruz',300,2,39,'2023-09-29',1,3200),(14,'Reyes',500,3,42,'2021-11-11',2,2900),(15,'Méndez',NULL,1,26,'2023-04-04',3,2100),(16,'Lomonaco',NULL,1,26,'2023-04-04',4,2100),(17,'Martín',150,10,27,'2023-02-15',3,2500),(18,'López',200,10,35,'2023-03-20',3,2800),(19,'Pérez',NULL,10,29,'2023-04-25',3,2400),(20,'Hernández',400,10,33,'2023-05-30',3,3000);
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localidades`
--

DROP TABLE IF EXISTS `localidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `localidades` (
  `id` int(11) NOT NULL,
  `localidad` varchar(80) NOT NULL,
  `Activo` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localidades`
--

LOCK TABLES `localidades` WRITE;
/*!40000 ALTER TABLE `localidades` DISABLE KEYS */;
INSERT INTO `localidades` VALUES (1,'Córdoba',1),(2,'Carlos Paz',1),(3,'Barcelona',1);
/*!40000 ALTER TABLE `localidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puestos`
--

DROP TABLE IF EXISTS `puestos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `puestos` (
  `id` int(11) NOT NULL,
  `puesto` varchar(80) NOT NULL,
  `Activo` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puestos`
--

LOCK TABLES `puestos` WRITE;
/*!40000 ALTER TABLE `puestos` DISABLE KEYS */;
INSERT INTO `puestos` VALUES (1,'Gerente',1),(2,'Programador',1),(3,'Soporte',1),(4,'Analista',1);
/*!40000 ALTER TABLE `puestos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-29 11:08:21
