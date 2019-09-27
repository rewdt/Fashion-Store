const Joi = require('@hapi/joi')

const registerValidation = data => {
    const schema = Joi.object({
        name: Joi.string()
            .min(3)
            .max(100)
            .required(),
        password: Joi.string().required().min(6),
        profile_picture: Joi.string(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    });
    return schema.validate(data)
}

module.exports.registerValidation = registerValidation;