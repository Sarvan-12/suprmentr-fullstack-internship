const express = require('express');
const router = express.Router();

let authors = [
  { id: 1, name: 'Paulo Coelho' },
  { id: 2, name: 'James Clear' },
];

// GET /authors
router.get('/', (req, res) => {
  res.json(authors);
});

// GET /authors/:id
router.get('/:id', (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));
  if (!author) return res.status(404).json({ message: 'Author not found' });
  res.json(author);
});

// POST /authors
router.post('/', (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    name: req.body.name,
  };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

// PUT /authors/:id
router.put('/:id', (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));
  if (!author) return res.status(404).json({ message: 'Author not found' });
  author.name = req.body.name || author.name;
  res.json(author);
});

// DELETE /authors/:id
router.delete('/:id', (req, res) => {
  const index = authors.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Author not found' });
  authors.splice(index, 1);
  res.json({ message: 'Author deleted' });
});

module.exports = router;