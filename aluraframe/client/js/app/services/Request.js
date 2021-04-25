class Request {
    #httpService;

    constructor() {
        this.#httpService = new HttpService();
    }

    obtenerVentasSemana() {
        
            return this.#httpService
                .get('/ventas/semana')
                .then(response => {
                    return response.map(venta => new Venta(new Date(venta.fecha), 
                                                venta.cantidad, 
                                                venta.valor));
                })
                .catch(err => {
                    console.log(err);
                    throw new Error('No se pudo realizar la importación de ventas');
                });
        
    }

    obtenerVentasSemanaAnterior() {

        
            return this.#httpService
                .get('/ventas/semanaanterior')
                .then(response => {
                    return response.map(venta => new Venta(new Date(venta.fecha), 
                                                venta.cantidad, 
                                                venta.valor));
                })
                .catch(err => {
                    console.log(err);
                    throw new Error('No se pudo realizar la importación de ventas');
                });
        
    }

    obtenerVentasQuincenaAnterior() {

        
            return this.#httpService
                .get('/ventas/quincenaanterior')
                .then(response => {
                    return response.map(venta => new Venta(new Date(venta.fecha), 
                                                venta.cantidad, 
                                                venta.valor));
                })
                .catch(err => {
                    console.log(err);
                    throw new Error('No se pudo realizar la importación de ventas');
                });
        
    }

    obtenerVentas() {

        return Promise.all([
            this.obtenerVentasSemana(),
            this.obtenerVentasSemanaAnterior(),
            this.obtenerVentasQuincenaAnterior()
        ]).then(periodos => {

            let ventas = periodos
                .reduce((datos, periodo) => datos.concat(periodo), []);

            return ventas;

        }).catch(error => {
            throw new Error(error);
        });

    } 
}