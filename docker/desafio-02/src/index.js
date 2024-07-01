const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connection.query('CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))');

app.post("/add", (req, res) => {
  const name = req.body.name;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  connection.query('INSERT INTO people (name) VALUES (?)', [name], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error inserting name into database" });
    }
    res.status(200).json({ message: "Name added successfully" });
  });
});

app.get("/", (_, res) => {
  connection.query('SELECT name FROM people', (_, results) => {
    const namesList = results.map(row => `<li>${row.name}</li>`).join('');
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <form id="nameForm">
        <input type="text" id="nameInput" placeholder="Enter name" required>
        <button type="submit">Add Name</button>
      </form>
      <ul id="namesList">${namesList}</ul>
      <script>
        document.getElementById('nameForm').addEventListener('submit', function(event) {
          event.preventDefault();
          const name = document.getElementById('nameInput').value;
          fetch('/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
          })
          .then(response => response.json())
          .then(data => {
            if (data.message === "Name added successfully") {
              const li = document.createElement('li');
              li.textContent = name;
              document.getElementById('namesList').appendChild(li);
              document.getElementById('nameInput').value = '';
            } else {
              alert(data.message);
            }
          })
          .catch(error => console.error('Error:', error));
        });
      </script>
    `);
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
