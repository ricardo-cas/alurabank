class NegociaçãoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociações = new Negociações();
  private _negociaçõesView = new NegociaçõesView("#negociacoesView");

  constructor() {
    this._inputData = <HTMLInputElement>document.querySelector("#data");
    this._inputQuantidade = <HTMLInputElement>(
      document.querySelector("#quantidade")
    );
    this._inputValor = <HTMLInputElement>document.querySelector("#valor");
    // atualiza a view para exibir os dados do modelo, vazio
    this._negociaçõesView.update(this._negociações);
  }

  adiciona(event: Event) {
    event.preventDefault();

    const negociação = new Negociação(
      new Date(this._inputData.value.replace(/-/g, ",")),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
    this._negociações.adiciona(negociação);
    // Listando a lista de negociações
    this._negociações.paraArray().forEach((negociação) => {
      console.log(negociação.data);
      console.log(negociação.quantidade);
      console.log(negociação.valor);
      console.log(negociação.volume);
    });
  }
}
