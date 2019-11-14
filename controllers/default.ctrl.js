var defaultCtrl = {
    defaultcheck('welcome to Expresspro');
    res.status(200);
},
healthCheck: function(req, res){
    res.send({status: 'Expresspro is up on runing'});
    res.status(200);
}
}

module.exports = defaultCtrl;