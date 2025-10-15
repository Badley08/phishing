CREATE DATABASE insecure_demo;
USE insecure_demo;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255),
  password TEXT
);
