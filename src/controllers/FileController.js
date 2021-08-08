const knex = require('../database');
const fileDataValidator = require('../utils/fileDataValidator');
const idValidator = require('../utils/idValidator');
const pageNumberValidator = require('../utils/pageNumberValidator');

module.exports = {
	async index (request, reply) {
		try {
			const { page = 1 } = request.query;

			const pageNumberError = pageNumberValidator(page);

			if (pageNumberError) {
				throw { error: pageNumberError.message };
			}

			const query = knex('files')
										.limit(5)
										.offset((page - 1) * 5);

			const [ count ] = await knex('files').count();

			reply.header('X-Total-Count', count['count(*)']);

			return await query;
		} catch (e) {
			reply.status(500).send(e);
		}
	},

	async create (request, reply) {
		try {
			const { number, name, box } = request.body;
		
			const fileDataError = fileDataValidator(number, name, box);

			if (fileDataError) {
				throw { error: fileDataError.message };
			}
				
			await knex('files').insert({ number, name, box });

			reply
			.status(201)
			.send();
		} catch (e) {
			reply
			.status(500)
			.send(e);
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
			reply
			.status(500)
			.send(e);
		}
	},

	async delete (request, reply) {
		try {
			const { id } = request.params;

			const idError = idValidator(id);

			if (idError) {
				throw { error: idError.message };
			}

			await knex('files')
					 .del()
					 .where({ id });

			reply.send();
		} catch (e) {
			reply
			.status(500)
			.send(e);
		}
	}
};
