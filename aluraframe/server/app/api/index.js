/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

var fechaActual = new Date();
var semanaAnterior = new Date();
semanaAnterior.setDate(fechaActual.getDate() - 7);
var quincenaAnterior = new Date();
quincenaAnterior.setDate(fechaActual.getDate() - 14);

var ventas = [
      { fecha : fechaActual, cantidad : 1, valor : 150},
      { fecha : fechaActual, cantidad : 2, valor : 250},
      { fecha : fechaActual, cantidad : 3, valor : 350},
      { fecha : semanaAnterior, cantidad : 1, valor : 450},
      { fecha : semanaAnterior, cantidad : 2, valor : 550},
      { fecha : semanaAnterior, cantidad : 3, valor : 650},
      { fecha : quincenaAnterior, cantidad : 1, valor : 750},
      { fecha : quincenaAnterior, cantidad : 2, valor : 950},
      { fecha : quincenaAnterior, cantidad : 3, valor : 950}
    ];


api.listaSemana = function(req, res) {
    var ventasActuales = ventas.filter(function(venta) {
        return venta.fecha > semanaAnterior;
    });
    res.json(ventasActuales);
};

api.listaSemanaAnterior = function(req, res) {
   
   var ventasAnteriores = ventas.filter(function(venta) {
        return venta.fecha < fechaActual && venta.fecha > quincenaAnterior;
    });
	setTimeout(function() {
		res.json(ventasAnteriores);	
	}, 500);
    
};

api.listaQuincenaAnterior = function(req, res) {

   var ventasQAnteriores = ventas.filter(function(venta) {
        return venta.fecha < semanaAnterior;
    });
    res.json(ventasQAnteriores);
    
};

api.registrarventa = function(req, res) {

   console.log(req.body);
   req.body.fecha = new Date(req.body.fecha.replace(/-/g,'/'));
   ventas.push(req.body);
   res.status(200).json("Venta recibida");
};



module.exports = api;