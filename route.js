var controladorcalcu = require('./calculadoracontroler.js');

module.exports = function(app){

	app.post('/Asumar',controladorcalcu.sumar);
	app.post('/Arestar',controladorcalcu.restar);
	app.post('/Amulti',controladorcalcu.multi);
	app.post('/Adiv',controladorcalcu.div);

}