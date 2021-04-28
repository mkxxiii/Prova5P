const models = require('../models/doacaoModels.js');
const rngGenerator = require('../functions/promoCodeGenerator.js')
const doacaoValidator = require('../functions/doacaoValidator.js')

exports.realizarDoacao = function(req, res) {
    let doacao = new models.doacaoRequest();
    doacao.valorDoacao = 10;
    doacao.nomeInstituicao = 'Uniaraxa';
    doacao.cpfDoador = '09350442647';
    doacao.nomeDoador = 'Victor'

    let promoCode = rngGenerator.generatePromotionalNumber(1000, 9999, doacao.cpfDoador, 10000, 99999);
    
    let validationResult = doacaoValidator.validateModel(doacao);
    if(validationResult){
        let returnObject = new models.doacaoResponse();
        returnObject.mensagem = validationResult;
        
        res.json(returnObject);
    }

    let discountAmmount = 0;
    if(doacao.valorDoacao === 10){
        discountAmmount = 10
    }
    else if(doacao.valorDoacao === 20){
        discountAmmount = 20
    }
    else if(doacao.valorDoacao === 50){
        discountAmmount = 30
    }
    else if(doacao.valorDoacao >= 100){
        discountAmmount = 50
    }
    
    
    let returnMessage = `Voce ganhou um vale desconto de ${discountAmmount}% nas lojas xpto. Código do brinde de desconto é ${promoCode}`;

    let returnObject = new models.doacaoResponse();
    returnObject.mensagem = 'Obrigado pela sua doação!';
    returnObject.brinde = returnMessage;
    
    res.json(returnObject);
};