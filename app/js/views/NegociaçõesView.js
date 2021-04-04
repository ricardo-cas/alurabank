class NegociaçõesView {
    constructor(selector) {
        this._elemento = document.querySelector(selector);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
        ${model
            .paraArray()
            .map((Negociação) => {
            return `
            <tr>
                <th>${Negociação.data.getDate()} /${Negociação.data.getMonth()} +
                  1 / ${Negociação.data.getFullYear()}
                </th>
                <th>${Negociação.quantidade}</th>
                <th>${Negociação.valor}</th>
                <th>${Negociação.volume}</th>
            </tr>
            `;
        })
            .join("")}
        </tbody>

        <tfoot>
        </tfoot>
    </table>  
        `;
    }
}
