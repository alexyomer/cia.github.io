

const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

let multimedia = [];

app.get('/', (req, res) => {
  res.json(multimedia);
});

app.post('/', (req, res) => {
  const newMedia = req.body;
  multimedia.push(newMedia);
  res.json(newMedia);
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  multimedia = multimedia.filter(item => item.id !== id);
  res.json({ message: 'Multimedia eliminado correctamente' });
});

app.listen(3000, () => {
  console.log('API running on port 3000');
});