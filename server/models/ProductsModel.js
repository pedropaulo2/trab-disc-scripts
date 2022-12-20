const products = [];

module.exports = {
    createProduct: function(nome, desc) {
        return {
            nome: nome,
            desc: desc,
        }
    },

    addProduct: function (product){
        products.push(product);
    },

    getProducts: function(){
        return products;
    }

}