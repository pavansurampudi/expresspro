let products = [
    {
        id: 1001,
        name: 'samsung s9 plus',
        price: '39999',
        instock: true
    },
    {
        id: 1002,
        name: 'one plus 7',
        price: '29999',
        instock: true
    },
    {
        id: 1003,
        name: 'one plus 6',
        price: '35000',
        instock: true
    },
];
const productCtrl = {
    getproducts: function (req, res) {
        res.json(products);
        res.status(200);
    },
    getproductByID: function (req, res) {
        let id = +req.params.id;
        let products;
        for (let i = 0; i < products.length; i++) {
            if products[i].id === id) {
                product = product[1];
            }
        }
        if (product) {
            res.send(product);
            res.status(200);
        } else {
            res.send('not found');
            res.status(404);
        }

    },

    addproduct: function (req, res) {
        let id = req.body.id;
        let ispresent = false;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                ispresent = true;
            }
        }

        if (ispresent) {
            res.send("Already exist");
            res.status(200);
        } else {
            product.push(req.body);
            res.send('inserted sucessfully');
            res.status(200)
        }

    },
    update: function (req, res) {
        let id = req.body.id;
        let ispresent = false;
        for (let i = 0; i < product.length; i++) {
            if (products[i].id === id) {
                products[i].name = req.body.name;
                products[i].price = req.body.price;
                products[i].instoock = req.body.instock;
                ispresent = true;
            }
        }
        if (ispresent) {
            res.send('updated sucessfully');
            res.status(200);
        } else {
            res.send('failed in updating');
            res.status(200);
        }
    },
    delete: function (req, res) {
        let id = +req.query.id;
        let isDeleted = false;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                products.splice(i, 1);
                isDeleted = true;
            }
        }
        if (isDeleted) {
            res.send('Deleted sucessfully');
            res.status(200);
        } else {
            res.send('failed in deleteing');
            res.status(200);
        }
    }
}

module.exports = productCtrl;