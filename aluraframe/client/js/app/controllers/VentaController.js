class VentaController {
    #fecha;
    #cantidad;
    #valor;
    #listaVentas;
    #ventasView;
    #mensaje;
    #mensajeView;
    #ordenActual;

    constructor() {
        let $ = document.querySelector.bind(document);
        this.#fecha = $('#fecha');
        this.#cantidad = $('#cantidad');
        this.#valor = $('#valor');
        this.#ordenActual = ''; // cuando la página sea cargada, no hay criterio. Sólo tiene cuando el usuario haga clic en las columnas
        console.log(this);//VentaController
        
        this.#listaVentas = new Bind(new ListaVentas(),
                                new VentasView($('#VentasView')),
                                'agrega','borra','ordena','invierteOrden');
        
        

        this.#mensaje = new Bind(new Mensaje(),
                        new MensajeView($('#MensajeView')),
                        'texto');
    
    }

    agrega(event) {
        event.preventDefault();

        
        try {
            this.#listaVentas.agrega(this.#creaVenta());
            this.#mensaje.texto = 'Operación realizada correctamente!!!';
            this.#limpiaFormulario();
        } catch (err) {
            this.#mensaje.texto = err;
        }


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
        request
        .obtenerVentas()
        .then(ventas => {
          ventas.forEach(venta => this.#listaVentas.agrega(venta));
          this.#mensaje.texto = 'Ventas del período importadas exitosamente';
        })
        .catch(error => this.#mensaje.texto = error);  
    }

    borra() {
        this.#listaVentas.borra();
        

        this.#mensaje.texto = 'Limpieza de ventas realizada!!!';
        
    }

    ordena(columna) {
        if(this.#ordenActual == columna) {
            this.#listaVentas.invierteOrden();
        } else {
            this.#listaVentas.ordena((a, b) => a[columna] - b[columna]);    
        }
        this.#ordenActual = columna;
    }

}