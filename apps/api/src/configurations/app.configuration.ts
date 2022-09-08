import { Users } from '../modules/user/entities/users.entity';
import { Weight } from '../modules/weight/entities/weights.entity';

export const environment = process.env.NODE_ENV || 'local';
export const isDev = !['production', 'preprod', 'test', 'staging'].includes(
  environment
);
export const isTest = process.env.NODE_ENV === 'test';
export const isSwagger = process.env.NODE_ENV === 'swagger';

export default () => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 80,
    // url: process.env.URL || 'http://localhost',
    // protocol: process.env.APP_PROTOCOL || 'http',
    isDev,
    environment,
  },
  database: {
    type: 'postgres',
    host: process.env.DB_SOCKET,
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'app',
    entities: [Users, Weight],
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
    createFixtures: isSwagger ? false : process.env.DB_FIXTURES !== 'false', // isDev,
  },
});
