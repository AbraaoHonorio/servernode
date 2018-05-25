
// const repository = require('../repositories/userRepository');
const db = require('../db');

exports.get = (req, res, next) => {

    db.findAll((response) => {
        return res.json(response.rows);
    }, (err) => {
        res.status(500).send({ message: err.message});
    });

    // try {

    //     var data =  repository.get();
    //     data.then(function(response){
    //         return res.json(response.rows)
    //     })    
           
    //   } catch (e) {
    //     console.log(JSON.parse(e));
    //     res.status(500).send({
    //         message: 'Falha ao processar sua requisição'
    //     });
    // }
    //res.status(200).send('GET Requisição recebida com sucesso!');
};


exports.getById = (req, res, next) => {
    res.status(200).send('getById Requisição recebida com sucesso!');
};


exports.post = (req, res, next) => {
    res.status(201).send('post Requisição recebida com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`put Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(` delete Requisição recebida com sucesso! ${id}`);
};