class ListaVentas {
    _listaVentas;

    constructor(atajo) {
        this._listaVentas = [];
    }

    agrega(venta) {
        //this._listaVentas.push(venta);
        this._listaVentas = [].concat(this._listaVentas,venta);
    }

    get listaVentas() {
        return [].concat(this._listaVentas);
    }

    borra() {
        this._listaVentas = [];
    }

    ordena(criterio) {
        this._listaVentas.sort(criterio);        
    }

    invierteOrden() {
        this._listaVentas.reverse();
    }
}