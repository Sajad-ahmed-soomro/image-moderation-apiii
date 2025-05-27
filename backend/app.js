const express = require('express');
const authRoutes = require('./routes/authRoutes');
const moderateRoutes = require('./routes/moderateRoutes');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json());



app.use('/auth', authRoutes);
app.use('/moderate', moderateRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

module.exports = app;
