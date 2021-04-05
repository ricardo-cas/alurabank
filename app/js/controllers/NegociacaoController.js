class NegociaçãoController {
    constructor() {
        this._negociações = new Negociações();
        this._negociaçõesView = new NegociaçõesView("#negociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = (document.querySelector("#quantidade"));
        this._inputValor = document.querySelector("#valor");
        // atualiza a view para exibir os dados do modelo, vazio
        this._negociaçõesView.update(this._negociações);
    }
    adiciona(event) {
        event.preventDefault();
        const negociação = new Negociação(new Date(this._inputData.value.replace(/-/g, ",")), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociações.adiciona(negociação);
        this._negociaçõesView.update(this._negociações);
        this._mensagemView.update("Negociação adicionada com Sucesso =)");
    }
}
