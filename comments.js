// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Comment schema and model
const commentSchema = new mongoose.Schema({
  username: String,
  text: String,
});

const Comment = mongoose.model('Comment', commentSchema);

// API routes
app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});





