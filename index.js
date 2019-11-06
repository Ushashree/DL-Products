var express = require('express');
var app = express();


app.get('/', function(request, response){
    response.send('Welcome to DL-Products');
})

app.get('/products', function(request, response){
    var products = [
        {
            id: 1,
            name: 'Samsung S9 Plus',
            price: '39999',
            inStock: true
        },
        {
            id: 2,
            name: 'One Plus 7',
            price: '39999',
            inStock: true
        },
        {
            id: 3,
            name: 'One Plus 6',
            price: '29999',
            inStock: false
        },
    ];
    response.send(products);
})

app.get('/books', function(req, res){
    let books = [
        {
            id: 1,
            name: 'Java Script: The Goodparts',
            price: '425',
            inStock: true
        },
        {
            id: 2,
            name: 'Mastering HTML, CSS & Javascript Web Publishing',
            price: '435',
            inStock: true
        },
        {
            id: 3,
            name: 'Get Programming with JavaScript',
            price: '607',
            inStock: false
        },
    ];
    res.json(books);
    res.status(400);
})
app.listen(3000, function(){
    console.log('Server runing on 3000 port');
})