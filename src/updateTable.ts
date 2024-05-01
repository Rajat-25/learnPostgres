import getClient from './util';

export const updateTodo = async (todoId: number) => {
  const client = await getClient();
  const query = `UPDATE TODOS  SET done=$1 WHERE id=$2`;
  const { rows } = await client.query(query, [true, todoId]);

  console.log(`Todo with TodoId ${todoId} Updated `);

};
