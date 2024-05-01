import getClient from './util';

export const getUsers = async () => {
  const client = await getClient();
  const query = `SELECT * FROM USERS;`;
  const res = await client.query(query);

  console.log('Users');

  for (let ele of res.rows) {
    console.log(`userid : ${ele.id} , Email : ${ele.email}`);
  }
};

export const getUserFromEmail = async (email:string) => {
  const client = await getClient();
  const query = `SELECT * FROM USERS WHERE EMAIL=$1`;
  const {rows} = await client.query(query, [email]);

  console.log('User detail');

  for (let ele of rows) {
    console.log(`id:${ele.id} , email:${ele.email}`);
  }
};

export const getTodosForUser = async (userId: number) => {
  const client = await getClient();
  const query = `SELECT * FROM TODOS WHERE user_id=$1`;
  const { rows } = await client.query(query, [userId]);

  console.log(`Todos for UserId :${userId}`);

  for (let { title, id, description, done } of rows) {
    console.log(
      `id:${id} , title:${title} , description:${description} , done:${done}`
    );
  }
};

// getUserFromEmail('hello@gmail.com')

// getTodosForUser(2)
