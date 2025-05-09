const express = require('express');
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes/authRoutes')

const app = express();
app.use(cors())

// Middleware to parse JSON
app.use(express.json());

app.use("/api" , router)
// Sample route
app.get('/', (req, res) => {
  res.send('Hello from server!');
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Connected to DB');
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})


