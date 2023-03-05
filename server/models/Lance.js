import Participante from "./Participante";

export default class Lance {
    participante;
    valor;
    constructor (participante, valor) {
        this.participante = participante;
        this.valor = valor;
    }
}