const express = require('express');

const app = express();
const helloController = require('./helloController');

app.get('/hello', helloController);

app.get('/', (req, res) => res.json({ hello: 'world' }));

app.listen(3000);
<<<<<<< HEAD
 
=======

//Testing this app 123 test
>>>>>>> made a temporary change
