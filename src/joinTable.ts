import getClient from './util';

const joinTable = async (userId: number) => {
  const client = await getClient();
  const query = `SELECT users.* , todos.title , todos.description , todos.done FROM users LEFT JOIN todos ON users.id=todos.user_id WHERE users.id=$1;`;

  const { rows } = await client.query(query, [userId]);
  console.log('Joined Query\n');

  for (let { email, password, title, description, done } of rows) {
    console.log(
      `Email : ${email}, Password : ${password} , Title : ${title} , Description : ${description} , Done : ${done} \n`
    );
  }
};

export default joinTable;
