var db = require('./db');

module.exports={

	get: function(userId, callback){
		var sql = "select * from user where id=?";

		db.getResult(sql, [userId], function(result){
			callback(result);
		});
	},
	getHotels: function(callback){
		var sql = "SELECT COUNT(*) as count FROM hotels WHERE deletedAt is NULL";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	getTours: function(callback){
		var sql = "SELECT COUNT(*) as count FROM tours WHERE deletedAt is NULL";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	getUsers: function(callback){
		var sql = "SELECT COUNT(*) as count FROM users WHERE deletedAt is NULL";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	getAll: function(callback){
		var sql = "select * from users";
		db.getResult(sql, [], function(results){
			callback(results);
		});
	},
	validate: function(user, callback){
		var sql = "select * from users where username=? and password=?";

		db.getResult(sql, [user.uname, user.password], function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "insert into user values (null, ?,?,?)";
		db.execute(sql, [user.uname, user.password, user.type], function(status){
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



