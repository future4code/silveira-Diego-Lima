-- Active: 1657822076167@@35.226.146.116@3306
CREATE TABLE IF NOT EXISTS User_Wirecard (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
cpf VARCHAR(11) NOT NULL,
password VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS Payment_Wirecard (
payment_id VARCHAR(255) PRIMARY KEY,
status VARCHAR(255) NOT NULL,
user_id VARCHAR(255) NOT NULL,
client_id VARCHAR(255) NOT NULL,
amount FLOAT NOT NULL,
type ENUM("credit card","boleto") DEFAULT "boleto",
card_holder_name VARCHAR(255),
card_number VARCHAR(25),
card_expiration_date VARCHAR(7),
card_cvv INT,
emissor VARCHAR(255),
FOREIGN KEY(user_id) REFERENCES User_Wirecard(id)
);