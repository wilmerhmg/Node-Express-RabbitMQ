import amqp from 'amqp';
module.exports = app => {
	const Config   = app ? 
					 app.config.init.RabbitCredentials :
					 require('../config/init').RabbitCredentials;
					 
    const RabbitMQ = amqp.createConnection(Config);
    
    RabbitMQ.on('ready', function () {
		console.log('>>> 🐰 The rabbit is in the oven.');
	});

	RabbitMQ.on('error', function () {
		console.log('Error conexion', arguments);
	});

	return RabbitMQ;
}