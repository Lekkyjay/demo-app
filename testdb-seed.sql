CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC NOT NULL,
  categoryId INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO categories (name) VALUES ('Electronics'), ('Appliances'), ('Accessories');

INSERT INTO products (name, price, categoryId) VALUES
  ('Refined Concrete Soap', 799, 1),  
  ('Smartphone', 499, 1),  
  ('Headphones', 149, 1),  
  ('Tablet', 349, 1),  
  ('Smartwatch', 199, 1),  
  ('Camera', 699, 1),  
  ('Gaming Console', 299, 1),  
  ('Bluetooth Speaker', 79, 1),  
  ('Monitor', 249, 1),  
  ('Keyboard', 49, 1),  
  ('Wireless Earbuds', 129, 1),  
  ('Fitness Tracker', 79, 1),  
  ('External Hard Drive', 149, 1),  
  ('Coffee Maker', 59, 2),  
  ('Robot Vacuum Cleaner', 299, 2),  
  ('Electric Toothbrush', 39, 2),  
  ('Wireless Router', 89, 1),  
  ('Bluetooth Headset', 59, 1),  
  ('Printer', 199, 1),  
  ('Desk Chair', 149, 2),  
  ('Wireless Mouse', 29, 1),  
  ('Bluetooth Keyboard', 49, 1),  
  ('External SSD Drive', 179, 1),  
  ('Smart TV', 499, 1),  
  ('Air Purifier', 149, 2)
