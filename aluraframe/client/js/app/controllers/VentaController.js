class VentaController {
    #fecha;
    #cantidad;
    #valor;
    #listaVentas;
    #ventasView;
    #mensaje;
    #mensajeView;

    constructor() {
        let $ = document.querySelector.bind(document);
        this.#fecha = $('#fecha');
        this.#cantidad = $('#cantidad');
        this.#valor = $('#valor');
        this.#listaVentas = new ListaVentas();
        this.#ventasView = new VentasView($('#VentasView'));

        this.#ventasView.update(this.#listaVentas);

        this.#mensaje = new Mensaje();
        this.#mensajeView = new MensajeView($('#MensajeView'));
        this.#mensajeView.update(this.#mensaje);
    }

    agrega(event) {
        event.preventDefault();

        
                            
        this.#listaVentas.agrega(this.#creaVenta());
        this.#ventasView.update(this.#listaVentas);

        this.#mensaje.texto = 'Operación realizada correctamente!!!';
        this.#mensajeView.update(this.#mensaje);
        this.#limpiaFormulario();


    }

    #creaVenta() {
        return new Venta(FechaHelper.textoParaFecha(this.#fecha.value),
                            this.#cantidad.value,
                            this.#valor.value);
    }

    #limpiaFormulario() {
        this.#cantidad.value = 0;
        this.#valor.value = '1';
        this.#fecha.value = '';

        this.#fecha.focus();
    }

}