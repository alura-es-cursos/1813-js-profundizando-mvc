class FechaHelper {

    constructor() {
        throw new Error('Esta clase sólo contiene métodos estáticos');
    }

    static textoParaFecha(texto) {
        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('El formato de la fecha no es válido');
            
        return new Date(...texto.split('-')
                                    .map((item,index) => (index==1)?item-1:item));
    }

    static fechaParaTexto(fecha) {
        return `${fecha.getDate()}/${(fecha.getMonth()+1)}/${fecha.getFullYear()}`;
        
    }
}