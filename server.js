
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./Routes/product');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

// Mount the product routes
app.use('/product', productRoutes);

mongoose
  .connect('mongodb+srv://DBamine:201JMT3242@cluster0.yqjzgqf.mongodb.net/Node-API?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => console.log('Could not connect to MongoDB', err));