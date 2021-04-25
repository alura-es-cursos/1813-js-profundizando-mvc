class Request {
    obtenerVentasSemana(cb) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET','/ventas/semana');
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log('Respuesta recibida');
                                        
                    cb(null,JSON.parse(xhr.responseText)
                    .map(venta => new Venta(new Date(venta.fecha), 
                                            venta.cantidad, 
                                            venta.valor)));    
                } else {
                    console.log('Error en petición');
                    cb('No se pudo realizar la importación de ventas',null);
                }
            }
        }
    }
}