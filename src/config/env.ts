import 'dotenv/config';

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing env variable: ${name}`);
  }
  return value;
}

export const env = {
  nodeEnv: required('NODE_ENV', 'development'),
  host: required('HOST', '127.0.0.1'),
  port: Number(required('PORT', '3000')),
  appName: required('APP_NAME', 'Мероприятия'),
} as const;

export const isDev = env.nodeEnv === 'development';