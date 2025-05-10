const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes/authRoutes')

const app = express();
app.use(cors({
   origin: 'http://localhost:5173', // Replace with your frontend URL (commonly 3000, 5173 for Vite)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}))

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(0))

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


