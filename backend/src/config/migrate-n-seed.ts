import { Client } from 'pg'
// import { config } from 'dotenv'
// config()

const runMigrations = async () => {
  const client = new Client()

  try {
    await client.connect()

    console.log('Connected to the database.')

    // Create categories table
    await client.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
      )
    `)
    console.log('Created table: categories')

    // Create products table
    await client.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price NUMERIC NOT NULL,
        categoryId INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE
      )
    `)
    console.log('Created table: products')

    await client.query(`INSERT INTO categories (name) VALUES ('Electronics'), ('Appliances'), ('Accessories')`)
    console.log('Categories table seeded')

    await client.query(`INSERT INTO products (name, price, categoryId) VALUES
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
        ('Air Purifier', 149, 2),  
        ('Gaming Mouse', 69, 1),  
        ('Wireless Charger', 39, 1),  
        ('Desk Lamp', 29, 2),  
        ('Bluetooth Speaker', 79, 1),  
        ('Coffee Grinder', 39, 2),  
        ('Product 1', 11, 3),
        ('Product 1', 10, 1),
        ('New Product', 10, 1),
        ('Product 1', 10, 1),
        ('Product 1', 10, 1),
        ('Rustic Bronze Tuna', 10, 1),
        ('Sleek Concrete Gloves', 10, 1),
        ('Ergonomic Bronze Car', 10, 1),
        ('Handmade Soft Gloves', 10, 1),
        ('Licensed Frozen Computer', 10, 1),
        ('Elegant Rubber Bike', 10, 1),
        ('Handcrafted Wooden Cheese', 10, 1),
        ('Handcrafted Wooden Hat', 10, 1),
        ('Handcrafted Plastic Pants', 10, 1),
        ('Intelligent Soft Sausages', 10, 1),
        ('Modern Metal Ball', 10, 1),
        ('Practical Rubber Sausages', 10, 1),
        ('Recycled Steel Pants', 10, 1),
        ('Ergonomic Cotton Soap', 10, 1),
        ('Handcrafted Frozen Hat', 10, 1),
        ('Generic Wooden Car', 10, 1),
        ('Ergonomic Fresh Bike', 10, 1),
        ('Elegant Cotton Pizza', 10, 1),
        ('Bespoke Rubber Mouse', 10, 1),
        ('Intelligent Fresh Shoes', 10, 1),
        ('Oriental Metal Chips', 10, 1),
        ('Generic Steel Chicken', 10, 1),
        ('Luxurious Frozen Towels', 10, 1),
        ('Generic Metal Shoes', 10, 1),
        ('Practical Fresh Gloves', 10, 1),
        ('Licensed Bronze Chair', 10, 1),
        ('Licensed Bronze Keyboard', 10, 1),
        ('Electronic Frozen Keyboard', 10, 1)
    `)
    console.log('Products table seeded')
  } 
  catch (err) {
    console.error('Error running migrations:', err)
  } 
  finally {
    await client.end()
    console.log('Closed database connection.')
  }
}

runMigrations()
