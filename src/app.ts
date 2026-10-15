import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import fastifyView from '@fastify/view';
import ejs from 'ejs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { env, isDev } from './config/env.js';
import { registerHomeRoutes } from './routes/home.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function buildApp() {
  const app = Fastify({
    logger: isDev
      ? { transport: { target: 'pino-pretty' } }
      : true,
  });

  await app.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'public'),
    prefix: '/public/',
  });

  await app.register(fastifyView, {
    engine: { ejs },
    root: path.join(__dirname, 'views'),
    viewExt: 'ejs',
    layout: 'layouts/main.ejs',
    defaultContext: {
      appName: env.appName,
      year: new Date().getFullYear(),
    },
  });

  app.get('/health', async () => ({ status: 'ok' }));

  await registerHomeRoutes(app);

  return app;
}