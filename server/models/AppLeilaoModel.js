
module.exports = {
    createLeilaoApp: function() {
        return{
            leilaoAtivo: null,
            leiloes: [],
        }
    },

    setLeilaoAtivo: function(appLeilao, leilao) {
        appLeilao.leilaoAtivo = leilao;
    },

    addLeilao: function(appLeilao, leilao) {
        appLeilao.leiloes.push(leilao);
    },

    getLeiloes: function(appLeilao) {
       return appLeilao.leiloes;
    },

    getLeilaoAtivo: function(appLeilao) {
        return appLeilao.leilaoAtivo;
    }
}