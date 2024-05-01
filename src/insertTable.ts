import getClient from './util';


const insertTable = async () => {
  const client = await getClient();
  const userQuery = `INSERT INTO users(email,password) VALUES ($1,$2) RETURNING id`;
  const userValue = ['joe@yahoo.com', '5298Joe'];
  const userRes = await client.query(userQuery, userValue);
  
  console.log(userRes.rowCount);

  const todoQuery = `INSERT INTO todos(title,description,user_id,done) VALUES ($1,$2,$3,$4) RETURNING id`;
  const todoValue = ['Watch movie', 'Inception', userRes.rows[0].id, false];
  const todoRes = await client.query(todoQuery, todoValue);

  console.log(todoRes.rowCount);
};

export default insertTable;
