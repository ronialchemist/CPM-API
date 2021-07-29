const knex = require('../database');
const Joi = require('joi');

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

			console.log(typeof number, typeof name, typeof box);
			
			const schema = Joi.object({
				number: Joi
				.string()
				.min(2)
				.max(3)
				.required()
				.pattern(new RegExp(/\d{2, 3}/))
				.messages({
					'string.min': `No campo "Nº" é permitido apenas números com no mínimo 2 dígitos`,
					'string.max': `No campo "Nº" não é permitido números com mais de 3 dígitos`,
					'string.empty': `O campo "Nº" não pode estar vazio`,
					'string.pattern.base': `test`
				}),
			});

			const { error } = schema.validate({ number });
			
		  if (error) {
				return { error: error.message };
			}

			return { status: 'passou' };
		} catch (e) {
			return e;
		}
	}
};
