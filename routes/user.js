module.exports = app => {
    const Users = app.config.db.models.Users;
    const MQService = app.controllers.RabbitMQ;

	function spread(fn) {
		return function (arr) {
			return fn.apply(null, arr);
		};
	}

	app.route(`/user/:id`).get((req, res) =>{
		Users.findOne({
			where: {User: req.params.id},			   
		}).then(result => res.json(result)).catch(error => {
			res.status(412).json({msg: error.message});
		});
	});

	app.route(`/user`).post((req, res) => {
		Users.create(req.body).then(User=>{
            MQService.publish('Mailerman', User, {persistent: true});
			res.status(201).json(User);
		}).catch(error=>{
			res.status(400).json(error.errors.map(e=>e.message));
		});
	}).put((req, res) => {
		Users.update(req.body,{
			where:{User:req.body.User}
		}).then(result=>{
			res.status(200).json({
				message:"It has been updated correctly."
			});
		}).catch(error=>{
			res.status(400).json(error.errors.map(e=>e.message));
		});
	}).delete((req, res) => {
		Users.destroy({
			where:{User:req.body.User}
		}).then(result=>{
			res.status(200).json({
				message:"It has been removed correctly."
			});
		}).catch(error=>{
			res.status(400).json(error.errors.map(e=>e.message));
		});
	});
};
