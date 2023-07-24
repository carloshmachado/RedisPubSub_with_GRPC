import Joi from 'joi';

export class ValidarParametros {
  public static async parametrosFindById(id: string) {
    const schema = Joi.object({
      id: Joi.string().alphanum().max(30).required()
    });

    await schema.validateAsync(
      {
        id
      },
      { abortEarly: false }
    );
  }
}
