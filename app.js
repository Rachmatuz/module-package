const express = require('express');
const app = express();
const port = 3000;
const { persegi } = require('./modules/shape.js')

app.get('/',(req, res) => {
    res.send('hello world');
});

app.get('/persegi/:number', (req, res) => {
    request.send(
        "sisi persegi: "+ req.params.number +"<br>Luas persegi" + persegi.luas(req.param.number));
});

app.listen(port, () => {
    console.log(`server listening to localhost:${port}`);
    
});