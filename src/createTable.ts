import getClient from './util';

const createTable = async () => {
  const client = await getClient();
  const createQuery = `CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL
)`;
  const res = await client.query(createQuery);

  console.log('User table created ');

  const todoQuery = `CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id),
    done BOOLEAN DEFAULT FALSE
)`;
  const res1 = await client.query(todoQuery);
  
  console.log('Todo table created ');

};

export default createTable;
