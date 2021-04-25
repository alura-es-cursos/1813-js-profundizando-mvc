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
        console.log(this);//VentaController
        
        this.#listaVentas = new Bind(new ListaVentas(),
                                new VentasView($('#VentasView')),
                                'agrega','borra');
        
        

        this.#mensaje = new Bind(new Mensaje(),
                        new MensajeView($('#MensajeView')),
                        'texto');
    
    }

    agrega(event) {
        event.preventDefault();

        
                            
        this.#listaVentas.agrega(this.#creaVenta());
        

        this.#mensaje.texto = 'Operación realizada correctamente!!!';
        
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

    importa() {
        let request = new Request();

        request.obtenerVentasSemana((err, response) => {
            if (err) {
                this.#mensaje.texto = err;
            }
            response.forEach(venta => this.#listaVentas.agrega(venta));
            this.#mensaje.texto = 'Importación de ventas realizada!!!';
        });
        
        
    }

    borra() {
        this.#listaVentas.borra();
        

        this.#mensaje.texto = 'Limpieza de ventas realizada!!!';
        
    }

}