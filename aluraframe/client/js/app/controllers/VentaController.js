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
        this.#ventasView = new VentasView($('#VentasView'));
        let self = this;

        this.#listaVentas = new Proxy(new ListaVentas(),{
            get: function(target, prop, receiver) { 
                if(['agrega','borra'].includes(prop) && typeof(target[prop]) == typeof(Function)) {
                    return function() {
                        console.log(`Interceptando dentro de función ${prop}`);
                        Reflect.apply(target[prop],target,arguments);
                        self.#ventasView.update(target);
                    }
                    
                }
                return Reflect.get(target, prop, receiver);
            }
            
        });


        this.#mensaje = new Mensaje();
        this.#mensajeView = new MensajeView($('#MensajeView'));
        this.#mensajeView.update(this.#mensaje);
    }

    agrega(event) {
        event.preventDefault();

        
                            
        this.#listaVentas.agrega(this.#creaVenta());
        //this.#ventasView.update(this.#listaVentas);

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

    borra() {
        this.#listaVentas.borra();
        //this.#ventasView.update(this.#listaVentas);

        this.#mensaje.texto = 'Limpieza de ventas realizada!!!';
        this.#mensajeView.update(this.#mensaje);
    }

}