module.exports = app => {
    const MQService = app ?
                      app.controllers.RabbitMQ :
                      require('../controllers/RabbitMQ')();

    const Suscriptor = Queue => {
        Queue.bind('#');
        Queue.subscribe(WatchMessage);
    };
    
    const WatchMessage = Message => {
        console.log(Message);
    };
    
    MQService.on('ready', function () {
		console.log(`>>> The slave is tracking the rabbit's jumps.`);
		MQService.queue('Mailerman', Suscriptor);
    });
    
    return MQService;
};