const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Change the MongoDb connection string before starting the server
const mongoURI = 'mongodb+srv://rahuldeka072:uJLhMWeTNDrXArBb@movieinfo.mk9sj.mongodb.net/?retryWrites=true&w=majority&appName=MovieInfo';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
