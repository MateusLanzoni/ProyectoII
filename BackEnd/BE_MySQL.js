require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// parse JSON requests
app.use(bodyParser.json());

async function initializeDatabaseTables() {
  try {
    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        identification VARCHAR(255) UNIQUE NOT NULL
      )
    `);

    // Create navigation table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS navigation (
        id INT AUTO_INCREMENT PRIMARY KEY,
        userId INT,
        page VARCHAR(255),
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id)
      )
    `);

    // Create buses table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS buses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        routeName VARCHAR(255) NOT NULL
      )
    `);

    // Add additional table creation queries here...

    console.log('Database tables initialized.');
  } catch (error) {
    console.error('Error initializing database tables:', error.message);
  }
}

// Call the database initialization function
initializeDatabaseTables();

// Define your routes here...


// Define a route to get all users
app.get('/users', async (req, res) => {
  try {
    const [users] = await pool.query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.sendStatus(500);
  }
});

// Define a route to get all navigation data
app.get('/navigation', async (req, res) => {
  try {
    const [navigationData] = await pool.query('SELECT * FROM navigation');
    res.json(navigationData);
  } catch (error) {
    console.error('Error fetching navigation data:', error.message);
    res.sendStatus(500);
  }
});

// Define a route to get all buses
app.get('/buses', async (req, res) => {
  try {
    const [buses] = await pool.query('SELECT * FROM buses');
    res.json(buses);
  } catch (error) {
    console.error('Error fetching buses:', error.message);
    res.sendStatus(500);
  }
});


// Start the server
const port = process.env.PORT || 3000; // Use a port other than the MySQL default
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});