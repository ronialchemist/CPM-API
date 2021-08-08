	const Joi = require('joi');

module.exports = (number, name, box) => {
	const schema = Joi.object({
		number: Joi
						.string()
						.required()
						.min(2)
						.max(3)
						.pattern(/^\d{2,3}$/)
						.messages({
							'string.empty': `O campo "Nº" não pode estar vazio`,
							'string.min': `O número deve ter no mínimo 2 dígitos`,
							'string.max': `O número deve ter no máximo 3 dígitos`,
							'string.pattern.base': `O número não é um número válido`
						}),

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

		box: Joi
				 .string()
				 .required()
				 .min(4)
				 .max(5)
				 .pattern(/^[A-Z]{1,1} [0-9]{2,3}$/)
				 .messages({
				 	 'string.empty': `O campo "Caixa" não pode estar vazio`,
				 	 'string.min': `O identificador da caixa não pode ter menos de 4 caracteres`,
					 'string.max': `O identificador da caixa não pode ter mais de 5 caracteres`,
					 'string.pattern.base': `O identificador da caixa não é um identificador válido`
				 })
	});
	
	const { error } = schema.validate({ number, name, box });

	return error;
}
