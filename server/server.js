const express = require('express');
const mongodb = require('./data/database');
const cors = require('cors');

const app = express();

port = process.env.port || 5000;

app.use(express.json())
app.use(cors());
app.use('/', require('./routes'));

app.listen(port, () => {
    mongodb.initDb(function (err) {
        if (err) console.log(err);
    })
    console.log(`Server is running on port ${port}`);
})