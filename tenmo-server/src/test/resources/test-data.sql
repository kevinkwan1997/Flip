
DROP TABLE IF EXISTS brands_to_look_for;
DROP TABLE IF EXISTS sold_items;
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS item_types;
DROP TABLE IF EXISTS item_statuses;

DROP SEQUENCE IF EXISTS seq_item_type_id;
DROP SEQUENCE IF EXISTS seq_item_status_id;
DROP SEQUENCE IF EXISTS seq_user_id;
DROP SEQUENCE IF EXISTS seq_account_id;
DROP SEQUENCE IF EXISTS seq_item_id;
DROP SEQUENCE IF EXISTS seq_brand_id;
DROP SEQUENCE IF EXISTS seq_sold_item_id;

CREATE SEQUENCE seq_item_type_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;

CREATE SEQUENCE seq_item_status_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;

CREATE SEQUENCE seq_user_id
  INCREMENT BY 1
  START WITH 1001
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;

CREATE SEQUENCE seq_account_id
  INCREMENT BY 1
  START WITH 2001
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;

CREATE SEQUENCE seq_brand_id
  INCREMENT BY 1
  START WITH 4001
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;  


CREATE SEQUENCE seq_item_id
  INCREMENT BY 1
  START WITH 3001
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;
  
CREATE SEQUENCE seq_sold_item_id
  INCREMENT BY 1
  START WITH 5001
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;


CREATE TABLE item_types (
	item_type_id int DEFAULT nextval('seq_item_type_id'::regclass) NOT NULL,
	item_type_desc varchar(32) NOT NULL,
	CONSTRAINT PK_item_types PRIMARY KEY (item_type_id)
);

CREATE TABLE item_statuses (
	item_status_id int DEFAULT nextval('seq_item_status_id'::regclass) NOT NULL,
	item_status_desc varchar(10) NOT NULL,
	CONSTRAINT PK_item_statuses PRIMARY KEY (item_status_id)
);

CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id),
	CONSTRAINT UQ_username UNIQUE (username)
);

CREATE TABLE accounts (
	account_id int DEFAULT nextval('seq_account_id'::regclass) NOT NULL,
	user_id int NOT NULL,
	balance decimal(13, 2) NOT NULL,
	CONSTRAINT PK_accounts PRIMARY KEY (account_id),
	CONSTRAINT FK_accounts_user FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE brands_to_look_for (
        brand_id int DEFAULT nextval('seq_brand_id'::regclass) NOT NULL,
        brand_desc varchar(32) NOT NULL,
        item_type_id int,
        account_id int,
        CONSTRAINT PK_brand PRIMARY KEY (brand_id),
        CONSTRAINT FK_item_type FOREIGN KEY (item_type_id) REFERENCES item_types (item_type_id),
        CONSTRAINT FK_account_id FOREIGN KEY (account_id) REFERENCES accounts(account_id)
);

CREATE TABLE items (
	item_id int DEFAULT nextval('seq_item_id'::regclass) NOT NULL,
	item_brand varchar(64),
	gender varchar(32),
	item_name varchar(128) NOT NULL,
	item_type_id int NOT NULL,
	price decimal(13, 2) NOT NULL,
	price_listed decimal(13, 2) NOT NULL,
	item_desc varchar(1024) NOT NULL,
	item_status_id int NOT NULL,
	account_id int NOT NULL,
	list_date date NOT NULL,
	
	CONSTRAINT PK_items PRIMARY KEY (item_id),
	CONSTRAINT FK_item_account_id FOREIGN KEY (account_id) REFERENCES accounts (account_id),
	CONSTRAINT FK_items_item_statuses FOREIGN KEY (item_status_id) REFERENCES item_statuses (item_status_id),
	CONSTRAINT FK_items_item_types FOREIGN KEY (item_type_id) REFERENCES item_types (item_type_id),
	CONSTRAINT CK_item_price_gt_0 CHECK ((price>0))
);

CREATE TABLE sold_items (
        sold_item_id int DEFAULT nextval('seq_sold_item_id'::regclass) NOT NULL,
        item_id int REFERENCES items(item_id),
        account_id int REFERENCES accounts(account_id),
        item_name varchar(128),
        item_price_listed decimal(13, 2) NOT NULL,
        item_price_sold decimal(13, 2) NOT NULL,
        net decimal(13, 2) NOT NULL,
        list_date date NOT NULL,
        sold_date date NOT NULL,
        
        CONSTRAINT PK_sold_item_id PRIMARY KEY (sold_item_id)
        
);


INSERT INTO item_statuses (item_status_desc) VALUES ('Unlisted');
INSERT INTO item_statuses (item_status_desc) VALUES ('Listed');

INSERT INTO item_types (item_type_desc) VALUES ('Misc');
INSERT INTO item_types (item_type_desc) VALUES ('Electronics');
INSERT INTO item_types (item_type_desc) VALUES ('Clothing');
INSERT INTO item_types (item_type_desc) VALUES ('Furniture');
INSERT INTO item_types (item_type_desc) VALUES ('China');
INSERT INTO item_types (item_type_desc) VALUES ('Jewelry');
INSERT INTO item_types (item_type_desc) VALUES ('Music');
INSERT INTO item_types (item_type_desc) VALUES ('Literature');

INSERT INTO users(username, password_hash) VALUES ('test5', 'aewrokwogajreogijoij');
INSERT INTO accounts(user_id, balance) VALUES (1001, 2000.00);
INSERT INTO items(item_brand, item_name, item_type_id, price, price_listed, item_desc, item_status_id, account_id, list_date) 
        VALUES ('Gucci', 'Bag', 3, 1199.99, 1250.99, 'Fake', 1, 2001, '09/03/2021');
        
SELECT user_id FROM users WHERE username ILIKE ?;