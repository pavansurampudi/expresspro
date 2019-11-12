var express = require('express');
var app = express();

app.get('/',function(request,response){
    response.send('welcome to expresspro');
})

app.get('/products',function(request,response){
    var products = [
        {
            id: 1,
            name: 'samsung',
            price: '30000',
            instock: true
        },
        {
            id: 2,
            name: 'nokia',
            price: '30000',
            instock: true
        },
        {
            id: 3,
            name: 'iphone',
            price: '30000',
            instock: true
        },
    ];
    response.send(products);
})

app.get('/books',function(request,response){
    var books = [
        {
            id: 1,
            name: 'java book',
            price: '300',
            instock: true
        },
        {
            id: 2,
            name: 'php book',
            price: '200',
            instock: true
        },
    ];
    response.send(books);

})
app.listen(3000,function(){
    console.log ('server running on 3000 port')
})