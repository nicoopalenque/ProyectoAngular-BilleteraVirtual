# Host: localhost  (Version 5.7.24)
# Date: 2019-07-16 19:16:04
# Generator: MySQL-Front 6.1  (Build 1.26)


#
# Structure for table "gestores"
#

DROP TABLE IF EXISTS `gestores`;
CREATE TABLE `gestores` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  `apellido` varchar(30) DEFAULT NULL,
  `dni` varchar(10) DEFAULT NULL,
  `provincia` varchar(50) DEFAULT NULL,
  `usuario` varchar(20) DEFAULT NULL,
  `clave` varchar(20) DEFAULT NULL,
  `saldo` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Data for table "gestores"
#


#
# Structure for table "movimientos"
#

DROP TABLE IF EXISTS `movimientos`;
CREATE TABLE `movimientos` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `id_tipo_de_operacion` decimal(10,0) DEFAULT NULL,
  `tipo_de_operacion` varchar(30) DEFAULT NULL,
  `costo_operacion` decimal(10,2) DEFAULT NULL,
  `id_gestor` int(11) DEFAULT NULL,
  `id_usuario_origen` int(11) DEFAULT NULL,
  `id_usuario_destino` int(11) DEFAULT NULL,
  `monto_operacion` decimal(10,2) DEFAULT NULL,
  `valor_comision` decimal(10,2) DEFAULT NULL,
  `saldo_inicial_origen` decimal(10,2) DEFAULT NULL,
  `saldo_final_origen` decimal(10,2) DEFAULT NULL,
  `saldo_inicial_destino` decimal(10,2) DEFAULT NULL,
  `saldo_final_destino` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

#
# Data for table "movimientos"
#

INSERT INTO `movimientos` VALUES (14,'2019-07-04',1,'TRANSFERENCIA',0.00,1,111,222,1000.00,0.00,4000.00,3000.00,4850.00,5850.00),(15,'2019-07-04',1,'TRANSFERENCIA',0.00,1,111,222,1000.00,0.00,3000.00,2000.00,5850.00,6850.00),(16,'2019-07-04',1,'TRANSFERENCIA',0.00,1,111,222,1000.00,0.00,2000.00,1000.00,6850.00,7850.00),(17,'2019-07-04',1,'TRANSFERENCIA',0.00,1,111,222,5000.00,0.00,10000.00,5000.00,0.00,5000.00);

#
# Structure for table "tipo_de_operacion"
#

DROP TABLE IF EXISTS `tipo_de_operacion`;
CREATE TABLE `tipo_de_operacion` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `operacion` varchar(50) DEFAULT NULL,
  `costo` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

#
# Data for table "tipo_de_operacion"
#

INSERT INTO `tipo_de_operacion` VALUES (1,'TRANSFERENCIA',0.00),(2,'EXTRACCION',0.00),(3,'DEPOSITO',0.00);

#
# Structure for table "titulares"
#

DROP TABLE IF EXISTS `titulares`;
CREATE TABLE `titulares` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL DEFAULT '',
  `apellido` varchar(30) NOT NULL DEFAULT '',
  `dni` varchar(10) NOT NULL DEFAULT '',
  `email` varchar(50) NOT NULL DEFAULT '',
  `fecha_nacimiento` date DEFAULT NULL,
  `provinciaUbicacion` varchar(30) NOT NULL DEFAULT '',
  `usuario` varchar(30) NOT NULL DEFAULT '',
  `clave` varchar(20) NOT NULL DEFAULT '',
  `saldo` decimal(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1 COMMENT='titulares de cuenta en la wallet';

#
# Data for table "titulares"
#

INSERT INTO `titulares` VALUES (2,'GENARO','MENDOZA','33333','genaro@gmail.com','2000-02-02','SALTA','genaro','genaro123',3000.00),(6,'JORGE','MENDOZA','22222','jormendoza@gmail.com','2000-01-01','JUJUY','jorge','jorge',1200.00),(7,'MARCOS','MENDOZA','7777','marcos@gmail.com','2000-01-01','JUJUY','marcos','marcos',850.00),(8,'DANIEL','MENDOZA','8888','daniel@gmail.com','2000-01-01','JUJUY','daniel','daniel',850.00),(9,'Test','Test','9999','email@gmail.com','2001-01-01','Jujuy','test','test',30000.00),(13,'Nicolas','Palenque','111','nicoopalenque@gmail.com','1996-11-14','Jujuy','nicolas','palenque',5000.00),(14,'Raquel','Campos','222','nicoopalenque@gmail.com','2019-05-30','Cordoba','raquel','campos',5000.00);
