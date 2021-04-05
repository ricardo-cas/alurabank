class NegociaçãoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;
  private _negociações = new Negociações();
  private _negociaçõesView = new NegociaçõesView("#negociacoesView");
  private _mensagemView = new MensagemView("#mensagemView");

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
    this._negociaçõesView.update(this._negociações);
    this._mensagemView.update("Negociação adicionada com Sucesso =)");
  }
}
