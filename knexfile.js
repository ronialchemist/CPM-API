// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
		host: '127.0.0.1',
		user: 'root',
		password: 'toor',
		database: 'cpm_file_finder'
    },
	migrations: {
		tableName: 'knex_migrations',
		directory: `${__dirname}/src/database/migrations`
	},
	seeds: {
		directory: `${__dirname}/src/database/seeds`
	}
  },

  production: {
    client: 'mysql',
    connection: {
		host: '127.0.0.1',
		user: 'root',
		password: 'toor',
		database: 'cpm_file_finder'
    },
    pool: {
      min: 2,
      max: 10
    },
	migrations: {
		tableName: 'knex_migrations',
		directory: `${__dirname}/src/database/migrations`
	},
	seeds: {
		directory: `${__dirname}/src/database/seeds`
	}
  }
};
