import logger from './infra/logger';
import server from './server';

async function main() {
  server.startServer();
}

main().catch((error) => {
  logger.error(error);
});
