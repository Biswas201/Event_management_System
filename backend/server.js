const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const eventRoutes = require("./routes/eventRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello")
})

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

// // Routes
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
