function carregaLeilao(leilaoAtivo){
    const leilaoDiv = document.getElementById('leilao'); 
    if(leilaoAtivo != null){
        // let docFrag = new DocumentFragment();
        // let ul = document.createElement('ul');
        // const listaLeiloes = document.getElementById('listaLeiloes');
        // listaProdutos.forEach(produto => {
            // let item = document.createElement('li');
            let card = document.createElement('div');
            let nome = document.createElement('h2');
            let desc = document.createElement('p');

            
            nome.textContent = leilaoAtivo.product.nome;
            desc.textContent = leilaoAtivo.product.desc;
            card.append(nome, desc);
            // item.append(card);
            // ul.append(item);
        // });

        // listaLeiloes.append(ul);
        // listaLeiloes.append(card);
        leilaoDiv.append(card);
    }else {
        let card = document.createElement('div');
        let mensagem = document.createElement('h2');
        mensagem.textContent = 'Não há Leilões Ativos no momento!';
        card.append(mensagem);
        leilaoDiv.append(card);
    }
}

function getLeilaoAtivo(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            if(this.response != '') {
                console.log(JSON.parse(this.response));
                carregaLeilao(JSON.parse(this.response));
                console.log(this.response);
                // console.log(typeof JSON.parse(this.response));
                const inputProductId = document.getElementById('fproduto_id');
                inputProductId.value = `${JSON.parse(this.response).id}`;
            }else {
                console.log('string vazia');
            }
        }
    }

    xhr.open('GET', 'http://localhost:4000/leilaoAtivo', true);
    xhr.send();

}

getLeilaoAtivo();