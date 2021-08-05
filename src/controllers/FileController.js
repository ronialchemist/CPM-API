const knex = require('../database');
const fileDataValidator = require('../utils/fileDataValidator');
const idValidator = require('../utils/idValidator');

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
		
			const error = fileDataValidator(number, name, box);

			if (error) {
				throw { error: error.message };
			}
				
			await knex('files').insert({ number, name, box });

			reply.status(201).send();
		} catch (e) {
			reply.status(500).send(e);
		}
	},

	async update (request, reply) {
		try {
			const { number, name, box } = request.body;
			const { id } = request.params;

			const fileDataError = fileDataValidator(number, name, box);
			const idError = idValidator(id);

			if (fileDataError) {
				throw { error: fileDataError.message };
			} else if (idError) {
				throw { error: idError.message };
			}


			await knex('files')
			.update({ number, name, box })
			.where({ id });

			reply.send();
		} catch (e) {
			reply.status(500).send(e);
		}
	}
};
