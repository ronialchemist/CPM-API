const Joi = require('joi');

module.exports = id => {
	const schema = Joi.object({
		id: Joi
				.number()
				.integer()
				.positive()
				.messages({
					'number.base': `O id deve ser um número`,
					'number.integer': `O id deve ser um número inteiro`,
					'number.positive': `O id não pode ser um número negativo`,
				})
	});

	const { error } = schema.validate({ id });

	return error;
}
