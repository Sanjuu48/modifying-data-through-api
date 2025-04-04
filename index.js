const express = require('express');
const mongoose = require('mongoose');
const menuRoutes = require('./routes/MenuRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://sanjayraveendran48:qwn4SgC6F2FD3gnz@cluster0.qc0gzcv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

app.use('/api', menuRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});