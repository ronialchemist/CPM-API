const Joi = require('joi');

module.exports = id => {
	const schema = Joi.object({
		id: Joi
		.number()
		.integer()
		.negative()
		.messages({
			'number.base': `O id deve ser um número inteiro`,
		})
	});

	const { error } = schema.validate({ id });

	return error;
}
