var db = require('./db');

module.exports={
	get: function(userId, callback){
		var sql = "select * from users where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},
	getAll: function(callback){
		var sql = "select * from users";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	getAllUsers: function(callback){
		var sql = "select * from users order by id asc";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	insertUser: function(user, callback){
		var sql = "insert into users(name,username,email,password,type) values (?, ?, ?, ?, ?)";
		db.execute(sql, [user.name, user.username, user.email, user.password, user.usertype], function(status){
			callback(status);
		});
	},
	validate: function(user, callback){
		var sql = "select * from users where username=? and password=?";

		db.getResult(sql, [user.uname, user.password], function(result){
			callback(result);
		});
	},
	checkUser: function(user, callback){
		var sql = "select * from users where username=?";

		db.getResult(sql, [user.username], function(result){
			callback(result);
		});
	},
	update: function(user, callback){
		var sql = "update users set name=?, email=?, password=?, type=? where id=?";
		db.execute(sql, [user.result.name, user.result.email, user.result.password, user.result.type, user.id], function(status){
			callback(status);
		});
	},
	updateProfile: function(user, callback){
		var sql = "update users set name=?,password=?, email=? where id=?";
		db.execute(sql, [user.name, user.password, user.email, user.id], function(status){
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



