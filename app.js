const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Welcome to my cool app!');
})

app.listen(PORT);