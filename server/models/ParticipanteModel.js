module.exports = {
    createParticipante: function(nome, email){
        return {nome: nome, email: email}
    },

    getNome(partic){
        return partic.nome;
    },
    
    getEmail(partic){
        return partic.email;
    },

    setNome(partic, nome) {
        partic.nome = nome;
    },

    setEmail(partic, email) {
       partic.email = email;
    }
}