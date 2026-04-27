const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to Database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Define Routes
app.use('/api/auth', require('./routes/auth'));

// Home route
app.get('/', (req, res) => {
  res.send('Secure Login API is running...');
});

const PORT = process.env.PORT || 5001;

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
