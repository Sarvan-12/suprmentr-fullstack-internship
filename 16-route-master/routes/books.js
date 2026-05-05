const express = require('express');
const router = express.Router();

let books = [
  { id: 1, title: 'The Alchemist', authorId: 1 },
  { id: 2, title: 'Atomic Habits', authorId: 2 },
];

// GET /books
router.get('/', (req, res) => {
  res.json(books);
});

// GET /books/:id
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
});

// POST /books
router.post('/', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    authorId: req.body.authorId,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id
router.put('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });
  book.title = req.body.title || book.title;
  book.authorId = req.body.authorId || book.authorId;
  res.json(book);
});

// DELETE /books/:id
router.delete('/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Book not found' });
  books.splice(index, 1);
  res.json({ message: 'Book deleted' });
});

module.exports = router;