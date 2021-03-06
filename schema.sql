DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

create table products(
item_id integer not null auto_increment,
product_name varchar (50) not null,
department_name varchar (50) not null,
price decimal (10,2) not null,
stock_quantity integer (10) not null,
primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("Grits", "Food", 3.00, 1500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("Eggs", "Food", 4.00, 2500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("Bicycle", "Sports", 300, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("PS4", "Entertainment", 275.00, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("Guitar", "Music", 400.00, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("Led Zeppelin 4", "Entertainment", 25.00, 2500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("Star Wars - The Force Awakens DVD", "Entertainment", 22.00, 3000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("Boxing Gloves", "Sports", 25.00, 750);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("Drum Set", "Music", 750.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ("iPod", "Entertainment", 200.00, 300);

SELECT * FROM products;
