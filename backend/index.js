const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const users = [
  { id: 1, username: 'director@mail.com', password: '1234' },
  { id: 2, username: 'finanza@mail.com', password: '1234' },
  { id: 3, username: 'destudio@mail.com', password: '1234' },
  { id: 4, username: 'dgec@mail.com', password: '1234' },
];

const secretKey = 'your_secret_key';

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${5000}`);
});
