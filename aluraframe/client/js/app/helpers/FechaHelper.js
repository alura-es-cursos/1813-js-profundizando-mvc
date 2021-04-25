class FechaHelper {

    constructor() {
        throw new Error('Esta clase sólo contiene métodos estáticos');
    }

    static textoParaFecha(texto) {
        if(!/\d{2}\/\d{2}\/\d{4}/.test(texto))
            throw new Error('El formato de la fecha no es válido');
            
        return new Date(...texto.split('/').reverse()
                                    .map((item,index) => (index==1)?item-1:item));
    }

    static fechaParaTexto(fecha) {
        return `${fecha.getDate()}/${(fecha.getMonth()+1)}/${fecha.getFullYear()}`;
        
    }
}