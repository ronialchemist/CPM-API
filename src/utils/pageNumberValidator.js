const Joi = require('joi');

module.exports = (page) => {
	const schema = Joi.object({
		page: Joi
					.number()
					.integer()
					.positive()
					.messages({
						'number.base': `O número da página deve ser um número`,
						'number.integer': `O número da página deve ser um número inteiro`,
						'number.positive': `O número da página não pode ser um número negativo`
					})
	});

	const { error } = schema.validate({ page });

	return error;
}
