CREATE TABLE esthenic_machine_retention(
	product_code VARCHAR(6) PRIMARY KEY,
	product_name VARCHAR(10) NOT NULL UNIQUE,
	category VARCHAR(10) NOT NULL,
	sales_cnt INT,
	stock INT,
	price INT NOT NULL,
	registration_date DATETIME DEFAULT SYSDATE()
);

DROP TABLE esthenic_machine_retention;

INSERT INTO esthenic_machine_retention(product_code)
VALUES ();