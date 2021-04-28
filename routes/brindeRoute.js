module.exports = function(app) {
  var doacaoController = require('../controller/brindeController.js');

  app.route('/doar').get(doacaoController.realizarDoacao);
};