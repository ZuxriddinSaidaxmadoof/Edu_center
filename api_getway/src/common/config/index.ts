import { IConfig } from './interfaces/config.interface';

import * as dotenv from 'dotenv';
dotenv.config();

export const config: IConfig = {
  serverPort: Number(process.env.SERVER_PORT),
  serverHost: process.env.SERVER_HOST,
  databaseUrl: process.env.DATABASE_URL,
  userServerPort: Number(process.env.USER_SERVICE_PORT),
  parkServerPort: Number(process.env.PARK_SERVICE_PORT),
  transactionServerPort: Number(process.env.TRANSACTION_SERVICE_PORT),
};
