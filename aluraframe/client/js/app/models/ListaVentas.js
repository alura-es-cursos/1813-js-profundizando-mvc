class ListaVentas {
    #listaVentas;

    constructor() {
        this.#listaVentas = [];
    }

    agrega(venta) {
        this.#listaVentas.push(venta);
    }

    get listaVentas() {
        return [].concat(this.#listaVentas);
    }
}