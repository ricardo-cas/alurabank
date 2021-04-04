class Negociações {
  private _negociações: Array<Negociação> = [];
  constructor() {}

  adiciona(negociação: Negociação): void {
    this._negociações.push(negociação);
  }
  //   melhor prática é definir nos métodos o tipo de dado que eles retornam
  paraArray(): Negociação[] {
    return [].concat(this._negociações);
  }
}
