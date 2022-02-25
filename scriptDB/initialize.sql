create DATABASE teamsoft;

CREATE TABLE teamsoft.Customers (
  id int NOT NULL AUTO_INCREMENT,
  cnpj varchar(14) NOT NULL,
  corporateName varchar(100) NOT NULL,
  contactName varchar(50) NOT NULL,
  contact varchar(13) NOT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY Customers_UN (cnpj)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE teamsoft.`Address` (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  street varchar(50) DEFAULT NULL,
  `number` int DEFAULT NULL,
  addressComplement varchar(50) DEFAULT NULL,
  district varchar(50) DEFAULT NULL,
  city varchar(50) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  zipeCode varchar(20) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id),
  KEY Address_FK (user_id),
  CONSTRAINT Address_FK FOREIGN KEY (user_id) REFERENCES Customers (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE USER 'api'@'localhost' IDENTIFIED BY 'api123';

GRANT ALL PRIVILEGES ON teamsoft. * TO 'api'@'localhost';

FLUSH PRIVILEGES;