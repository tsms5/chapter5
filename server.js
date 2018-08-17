const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    // res.send('<h1>Hello Express!</h1>');
    res.send({
         name:'Mark',
         likes:['apple', 'chocolate'],
    });
});

app.get('/about', (req, res)=>{
    res.send('About Page');
});

app.get('/bad', (req, res)=>{
    res.send({
        error: 'Something wrong',
    });
});

app.listen(3000);