class Negociações {
    constructor() {
        this._negociações = [];
    }
    adiciona(negociação) {
        this._negociações.push(negociação);
    }
    //   melhor prática é definir nos métodos o tipo de dado que eles retornam
    paraArray() {
        return [].concat(this._negociações);
    }
}
