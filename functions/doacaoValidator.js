exports.validateModel = function(objToValidate){
    objToValidate.validateModel();

    if(!objToValidate.nomeInstituicao){
        return 'Campo nome instituição obrigatório'
    }

    if(!objToValidate.nomeDoador){
        return 'Campo nome obrigatório'
    }

    if(!objToValidate.cpfDoador){
        return 'Campo cpf obrigatório'
    }

    if(objToValidate.valorDoacao < 100){
        if(objToValidate.valorDoacao !== 10 && objToValidate.valorDoacao !== 20 && objToValidate.valorDoacao !== 50){
            return 'Valor inválido de doação'
        }
    }

    return null;
}