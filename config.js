var path = require('path');

var config = {
		host: 'localhost',
		user: 'postgres',
		password: 'yashu',
		port: 5432,
		database: 'tms',
		max: '10',
		idleTimeoutMillis: 100 // how long a client is allowed to remain idle before being closed
}

module.exports = config
