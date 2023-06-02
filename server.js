const express = require('express');
const routes = require('./routes');
const mysql = require('mysql2');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

// Creating connection to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rosahernandez14",
  database: "ecommerce_db",
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
