const leiloes = [];
var leilaoId = 0;

module.exports = {
    createLeilao: function(prod){
        let id = leilaoId;
        leilaoId++;
        return {
            id: id,
            status: false,
            product: prod,
            lances: [],
            atualMenorLance: null
        }
    },

    // Parece errada essa função
    getLeiloes: function(){
        return leiloes;
    },

    getStatus: function(leilao){
        return leilao.status;
    },

    getAtualMenorLance: function(leilao, lance){
        return leilao.atualMenorLance;
    },

    addLance: function(leilao, lance){
        leilao.lances.push(lance);
    },

    setStatus: function(leilao, bool) {
        leilao.status = bool;
    },

    setAtualMenorLance: function(leilao, lance){
        leilao.atualMenorLance = lance;
    }

}