function wrapperClickHandler(idLeilao, statusLeilao) {
    return function (e){
        postNovoLeilaoStatus(idLeilao, statusLeilao);
    }
}


function postNovoLeilaoStatus(idLeilao, statusLeilao) { 
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:4000/status', true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    }

    let data = `{
        "id": ${idLeilao},
        "status": ${statusLeilao}
    }`;

    console.log(data);

    xhr.send(data); 
 }

// function createFormStatusLeilao (id, status) {
//     let form = document.createElement('form');
//     form.setAttribute('action', 'http://localhost:4000/status');
//     form.setAttribute('method', 'POST');
//     // form.addEventListener('submit', handleForm);
//     let campoIdLeilao = document.createElement('input');
//     campoIdLeilao.setAttribute('value', `${id}`);
//     campoIdLeilao.setAttribute('type', 'hidden');
//     let campoStatusLeilao = document.createElement('input');
//     campoStatusLeilao.setAttribute('type', 'hidden');
//     let btnAlternaStatusLeilao = document.createElement('input');
//     btnAlternaStatusLeilao.setAttribute('type', 'submit');

//     if(status == true) {
//         btnAlternaStatusLeilao.setAttribute('value', 'Encerrar') ;
//     }else {
//         btnAlternaStatusLeilao.setAttribute('value', 'Ativar') ;
//     }

//     form.append(campoIdLeilao, campoStatusLeilao, btnAlternaStatusLeilao);
//     return form;

// }


function cardMenorLanceInfo(cardLeilao, leilao) {
    let card = document.createElement('div');
    let particNome = document.createElement('p');
    let particEmail = document.createElement('p');
    let lanceValor = document.createElement('p');
    let semLanceMessage = document.createElement('p').textContent = 'Este leilão ainda não possui lances!';
    
    
    if(leilao.atualMenorLance != null) {
        // let atualMenorLance = LeilaoModel.getAtualMenorLance(leilao);
        let atualMenorLance = leilao.atualMenorLance;
        // let partic = LanceModel.getParticipante(atualMenorLance);
        let partic = atualMenorLance.participante;
        // let valor = LanceModel.getValor(atualMenorLance);
        let valor = atualMenorLance.valor;
        
        // particNome.textContent = `Nome: ${ParticipanteModel.getNome(partic)}`;
        particNome.textContent = `Nome: ${partic.nome}`;
        // particEmail.textContent = `Email: ${ParticipanteModel.getEmail(partic)}`;
        particEmail.textContent = `Email: ${partic.email}`;
        // lanceValor.textContent = `Valor: R$${valor}`;
        lanceValor.textContent = `Valor: R$${valor}`;
        card.append(particNome, particEmail, lanceValor);
    }else {
        card.append(semLanceMessage);
    }
    cardLeilao.append(card);
}


// Produto = Leilão

function carregaProdutosTela(listaProdutos){
    // let docFrag = new DocumentFragment();
    let ul = document.createElement('ul');
    const listaLeiloes = document.getElementById('listaLeiloes');
    listaProdutos.forEach(produto => {
        let item = document.createElement('li');
        let card = document.createElement('div');
        let nome = document.createElement('h2');
        let desc = document.createElement('p');
        let btnAlternaStatusLeilao = document.createElement('button');


        // let btnAtivarLeilao = document.createElement('button');
        // let btnEncerrarLeilao = document.createElement('button');
        
        
        nome.textContent = produto.product.nome;
        desc.textContent = produto.product.desc;
        card.append(nome, desc);

        if(produto.status == false) {
            btnAlternaStatusLeilao.textContent = 'Ativar'
            btnAlternaStatusLeilao.addEventListener('click', wrapperClickHandler(produto.id, produto.status));
            //adicionar classe css para botão de Ativar
            card.append(btnAlternaStatusLeilao);
        }
        
        // if(produto.status == false) {
        //     // btnalternaStatusLeilao.textContent = 'Ativar'
        //     //adicionar classe css para botão de Ativar
        //     // card.append(btnalternaStatusLeilao);

        //     let form = createFormStatusLeilao(produto.id, produto.status);
        //     card.append(form);

        // }

      
        if(produto.status == true) {
            cardMenorLanceInfo(card, produto);
            btnAlternaStatusLeilao.textContent = 'Encerrar';
            btnAlternaStatusLeilao.addEventListener('click', postNovoLeilaoStatus());
            //adicionar classe css para botão de Encerrar 
            card.append(btnalternaStatusLeilao);
        };
        
        // if(produto.status == true) {
        //     cardMenorLanceInfo(card, produto);
        //     // btnalternaStatusLeilao.textContent = 'Encerrar'
        //     //adicionar classe css para botão de Encerrar 
        //     // card.append(btnalternaStatusLeilao);

        //     let form = createFormStatusLeilao(produto.id, produto.status);
        //     card.append(form);
        // };

        item.append(card);
        ul.append(item);
    });

    listaLeiloes.append(ul);
}

function getProducts(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            carregaProdutosTela(JSON.parse(this.response));
            console.log(JSON.parse(this.response));
            console.log(typeof JSON.parse(this.response));
        }
    }

    xhr.open('GET', 'http://localhost:4000/products', true);
    xhr.send();

}

// function setStatus(){
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
            
            
            
//         }
//     }

//     xhr.open('POST', 'http://localhost:4000/status', true);
//     xhr.send();

// }

getProducts();