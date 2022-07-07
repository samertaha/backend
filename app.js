const express = require('express');
const path = require('path');
const colors = require('colors');
const scraper = require('./scraper/scraper');

const cors = require('cors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
//const PORT = process.env.PORT || 8000;
const PORT = 8000;
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/wordBank', require('./routes/wordBankRoute'));
app.use('/api/matches', require('./routes/userRoutes'));

app.use(errorHandler);
scraper();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
