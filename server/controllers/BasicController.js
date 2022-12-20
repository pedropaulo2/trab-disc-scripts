const ProductModel = require('../models/ProductsModel');
const LeilaoModel = require('../models/LeilaoModel');
const AppLeilaoModel = require('../models/AppLeilaoModel');
const ParticipanteModel = require('../models/ParticipanteModel');
const LanceModel = require('../models/LanceModel');

const app = AppLeilaoModel.createLeilaoApp();

module.exports = {
    home: (req, res) => {
        res.render('home');
    },
    lance: (req, res) => {
        if(req.body.fproduto_id == AppLeilaoModel.getLeilaoAtivo(app).id) {
            // Criar participante
            const partic = ParticipanteModel.createParticipante(req.body.fnome, req.body.femail);
            // Criar lance
            const lance = LanceModel.createLance(req.body.flance, partic);
            
            LeilaoModel.addLance(AppLeilaoModel.getLeilaoAtivo(app), lance);
            
            // forçando o primeiro lance cadastrado a ser sempre o atual menor lance do leilão
            LeilaoModel.setAtualMenorLance(AppLeilaoModel.getLeilaoAtivo(app), lance);
            
            
            res.send('Seu lance foi cadastrado com sucesso!');
        }else {
            res.send('Falha ao cadastrar lance! Por favor, tente novamente!');
        }
    },
    admin: (req, res) => {
        // let prod = productModel.createProduct(req.body.fnomep, req.body.fdescp);
        // productModel.addProduct(prod);
        // res.send('Novo Produto adicionado com sucesso!');

        // Criar produto
        const prod = ProductModel.createProduct(req.body.fnomep, req.body.fdescp);
        // console.log(prod);

        // Criar um leilão
        const leilao = LeilaoModel.createLeilao(prod);
        // console.log(leilao);
        // Adiciona no app de leilões
        AppLeilaoModel.addLeilao(app, leilao);
        
        // forçando o status do leilão cadastrado a ser true somente para fins de teste
        // LeilaoModel.setStatus(leilao, true);
        // AppLeilaoModel.setLeilaoAtivo(app, leilao);
        // console.log(app);


        res.send('Novo Produto adicionado com sucesso!');
    },

    leilaoAtivo: (req, res) => {
        res.set({
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*',
            'Vary': 'Origin'
        });

        // console.log(AppLeilaoModel.getLeilaoAtivo(app));
        res.send(AppLeilaoModel.getLeilaoAtivo(app));
    },

    products: (req, res) => {
        res.set({
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*',
            'Vary': 'Origin'
        });
        // res.send(productModel.getProducts());
        // console.log(AppLeilaoModel.getLeiloes(app));



        res.send(AppLeilaoModel.getLeiloes(app));
        // res.send(
        //     {
        //         leilaoAtivo: AppLeilaoModel.getLeilaoAtivo(app) ,
        //         leiloes: AppLeilaoModel.getLeiloes(app).filter(function (leiloes) { return leiloes.id != AppLeilaoModel.getLeilaoAtivo(app).id}),
        //     }
        // );
    },

    status: (req, res) => {
        res.set({
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': '*',
            'Vary': 'Origin'
        });
        // Recebe o status do leilão(via id) e atualiza o leilão
        console.log(body);
        req.body.id;
        req.body.status;
        console.log(`Leilao id: ${req.body.id}\n Leilao status: ${req.body.status}`);
    },
}