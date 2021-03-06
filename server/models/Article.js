const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'This field is required.',
  },
  secondaryTitle: {
    type: String,
    required: 'This field is required.',
  },
  text: {
    type: String,
    required: 'This field is required.',
  },
  date: {
    type: String,
    required: 'This field is required.',
  },
  category: {
    type: String,
    enum: ['News', 'Press'],
    required: 'This field is required.',
  },
  image: {
    type: String,
    required: 'This field is required.',
  },
});

articleSchema.index({title: 'text', text: 'text'});

module.exports = mongoose.model('Article', articleSchema);
