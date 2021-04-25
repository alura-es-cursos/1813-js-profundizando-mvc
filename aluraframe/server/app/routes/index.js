/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
    
    app.route('/ventas/semana')
        .get(api.listaSemana);
        
    app.route('/ventas/semanaanterior')
        .get(api.listaSemanaAnterior);
        
    app.route('/ventas/quincenaanterior')
        .get(api.listaQuincenaAnterior);  
        
    app.route('/ventas')
        .post(api.registrarventa);          
};