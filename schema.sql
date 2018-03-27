DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

create table products(
item_id integer not null,
product_name varchar (50) not null,
department_name varchar (50) not null,
price decimal (10,2) not null,
stock_quantity integer (10) not null
);

SELECT * FROM products;