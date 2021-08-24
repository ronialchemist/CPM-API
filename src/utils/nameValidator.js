const Joi = require('joi');

module.exports = (name) => {
	const schema = Joi.object({
		name: Joi
					.string()
					.required()
					.min(2)
					.max(40)
					.pattern(/^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
					.messages({
						'string.empty': `O campo "Nome" não pode estar vazio`,
						'string.min': `O nome deve ter no mínimo 2 caracteres`,
						'string.max': `O nome deve ter no máximo 40 caracteres`,
						'string.pattern.base': `O nome não é um nome válido`
					}),
	});

	const { error } = schema.validate({ name });

	return error;
}
