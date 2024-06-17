const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'db', // MySQL 서비스의 이름
  user: process.env.DB_USER || 'myuser',
  password: process.env.DB_PASSWORD || 'mypassword',
  database: process.env.DB_NAME || 'mydatabase'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.get('/api/project/shinhan/get_summary', (req, res) => {
  db.query('SELECT * FROM SUMMARY', (err, results) => {
    if (err) {
      res.status(500).send('Database query failed');
      return;
    }
    res.json(results);
  });
});

app.get('/api/project/shinhan/get_plan', (req, res) => {
  db.query('SELECT * FROM PLAN', (err, results) => {
    if (err) {
      res.status(500).send('Database query failed');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

