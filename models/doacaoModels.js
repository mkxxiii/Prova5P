exports.doacaoRequest = class {
    valorDoacao
    nomeInstituicao
    cpfDoador
    nomeDoador

    validateModel(){
        if(isNaN(this.valorDoacao)){
            throw "valorDoacao must be Number" 
        }
    }

    constructor(){
        this.valorDoacao = 0;
        this.nomeInstituicao = '';
        this.cpfDoador = '';
        this.nomeDoador = '';
    }
}

exports.doacaoResponse = class {
    mensagem
    brinde

    validateModel(){
        
    }

    constructor(){
        this.mensagem = '';
        this.brinde = '';
    }
}

 