module.exports = {
	db:{
        database: '',
        username: '',
        password: '',
        params: {
            host: "localhost",
            dialect: "sqlite",
            logging: !!(process.env.PORT) ? console.log : false,
            storage:'./store.sqlite',
            operatorsAliases: false
        }
    },
    RabbitCredentials: {
        host: 'localhost',
		login: 'admin',
		password: 'El Profesor Super O',
		port: 5672
    }
};