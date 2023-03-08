export default class Leilao {
    lote;
    lances = new Map();
    menorLanceUnico = 0;
    constructor (lote) {
        this.lote = lote;
    }

    adicionaLance (valor, participante) {
        const lance = this.lances.get(valor);

        if(!lance) {
            this.set(valor, {
                numeroOcorrenciasLance: 1,
                participantes: [participante]
            });
        } else {
            lance.numeroOcorrenciasLance++;
            lance.participantes.push(participante);
        
        }
    }

}