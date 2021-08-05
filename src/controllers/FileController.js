const knex = require('../database');
const fileValidator = require('../utils/fileValidator');

module.exports = {
	async index (request, reply) {
		try {
			return await knex('files');
		} catch (e) {
			return e;
		}
	},

	async create (request, reply) {
		try {
			const { number, name, box } = request.body;
		
			const error = fileValidator(number, name, box);

			if (error) {
				throw { error: error.message };
			}
				
			reply.status(201).send({ status: 'passou' });
		} catch (e) {
			reply.status(500).send(e);
		}
	}
};
