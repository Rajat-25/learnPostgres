import { Client } from 'pg';
import connection_str from './config';

const getClient = async () => {
  const client = new Client(connection_str);
  await client.connect();
  return client;
};

export default getClient;
