class ListaVentas {
    #listaVentas;
    #atajo;

    constructor(atajo) {
        this.#listaVentas = [];
        this.#atajo = atajo;
    }

    agrega(venta) {
        this.#listaVentas.push(venta);
        this.#atajo(this);
        //Reflect.apply(this.#atajo,this.#contexto,[this]);
    }

    get listaVentas() {
        return [].concat(this.#listaVentas);
    }

    borra() {
        this.#listaVentas = [];
        this.#atajo(this);
        //Reflect.apply(this.#atajo,this.#contexto,[this])
    }
}