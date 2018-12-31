module.exports = (sequelize, DataType) => {

	const User = sequelize.define('Users', {		
		User: {
			type: DataType.STRING(17),
			primaryKey: true,
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: "The User field CAN NOT be a NULL / EMPTY value."
				},
				len: {
					args: [1, 17],
					msg: "The User field must be between 1 and 17 characters, without spaces."
				}
			}
		},
		Name: {
			type: DataType.STRING(100),
			validate: {
				len: {
					args: [1, 100],
					msg: "The Name field must have between 1 and 100 characters."
				}
			}
		},
		Email:{
			type: DataType.STRING(64),
			validate: {
				len: {
					args: [3, 100],
					msg: "The Email field must have between 3 and 100 characters."
				}
			}
		}
	}, {
		tableName: `Users`
	});

	User.associate = (models) => {

	};

	return User;
};