const express = require('express');
const app = express();

const bookRoutes = require('./routes/books');
const authorRoutes = require('./routes/authors');

app.use(express.json()); // lets Express read JSON request bodies

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

app.listen(3000, () => {
  console.log('Bookstore server running on http://localhost:3000');
});