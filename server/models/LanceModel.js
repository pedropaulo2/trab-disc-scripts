module.exports = {
    createLance: function(valor, participante) {
        return {valor: valor, participante: participante}
    },

    getValor(lance) {
        return lance.valor;
    },

    getParticipante(lance) {
        return lance.participante;
    },

    setValor(lance ,valor) {
        lance.valor = valor;
    },

    setParticipante(lance, participante) {
        lance.participante = participante;
    }
    
}