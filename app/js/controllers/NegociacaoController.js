class NegociaçãoController {
    constructor() {
        this._negociações = new Negociações();
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = (document.querySelector("#quantidade"));
        this._inputValor = document.querySelector("#valor");
    }
    adiciona(event) {
        event.preventDefault();
        const negociação = new Negociação(new Date(this._inputData.value.replace(/-/g, ",")), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
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
