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

			const schema = Joi.object().keys({
				number: Joi
				.string()
				.min(2)
				.max(3)
				.required()
				.pattern(\dd\)
				.error(errors => {
					errors.forEach(error => {
						switch(error.code) {
							case 'string.base':
								error.message = 'No campo "número" é permitido apenas números';
								break;
							case 'string.min':
								error.message = 'No campo "número" não é permitido número decimal';
								break;
							case 'string.max':
								error.message = 'No campo "número" não é permitido número decimal';
								break;
							case 'string.empty':
								error.message = 'No campo "número" não é permitido número negativo';
								break;
							default:
								break;
						}
					});

					return errors;
				}),

				/* name: Joi
				.string()
				.min(3)
				.max(40)
				.required()
				.error(errors => {
					errors.forEach(error => {
						switch (error.code) {
							case 'string.base':
								error.message = 'No campo "nome" é permitido apenas letras e caracteres';
								break;
							case 'string.min':
								error.message = 'No campo "nome" é permitido apenas nomes com três ou mais letras ou caracteres';
								break;
							case 'string.max':
								error.message = 'No campo "nome" é permitido apenas nomes com quarenta ou menos caracteres';
								break;
							case 'string.empty':
								error.message = 'O campo "nome" não pode estar vazio' 
								break;
							default:
								break;
						}
					});

					return errors;
				}),

				box: Joi
				.alphanum()
				.min(4)
				.max(5)
				.required()
				.error(errors => {
					errors.forEach(error => {
						switch (error.code) {
							case 'alphanum.base':
								error.message = 'só permitimos caracteres alfa númericos.';
						}
					});
				}) */
			});

			const { error } = schema.validate({ number });

			return { error };
		} catch (e) {
			return e;
		}
	}
};
