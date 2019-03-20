var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from user where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from user";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where username=? and password=?";

		db.getResult(sql, [user.uname, user.password], function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "insert into user(password) values (?)";
		db.execute(sql, [user.password], function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql = "update user set username=?,password=?, type=? where id=?";
		db.execute(sql, [user.uname, user.password,user.type, user.id], function(status){
			callback(status);
		});
	},
	delete: function(userId, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	}
}



