import config from '../../config';
export async function auth(authorization: string): Promise<any> {
  const authHeader = authorization;

  if (!authHeader) {
    return { message: 'token não fornecido' };
  }

  const parts = authHeader.split(' ');

  if (!(parts.length === 2)) {
    return { message: 'erro na composição do token' };
  }

  const [schema, token] = parts;

  if (!/^Bearer$/i.test(schema)) {
    return { message: 'token mal formatado' };
  }

  if (config.MODEL_SECRET !== token) {
    return { message: 'token inválido' };
  }
}
