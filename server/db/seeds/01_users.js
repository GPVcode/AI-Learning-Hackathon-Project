import bcrypt from 'bcrypt';

const saltRounds = 10;

// As bcrypt is an async function, we'll need to use it synchronously here for simplicity. In production, always use the async version.
const hashedPassword = (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, saltRounds);
}

export function seed(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'alice', 
          email: 'alice@example.com', 
          password_hash: hashedPassword('alice_password')
        },
        {
          username: 'bob', 
          email: 'bob@example.com', 
          password_hash: hashedPassword('bob_password')
        },
        {
          username: 'carol', 
          email: 'carol@example.com', 
          password_hash: hashedPassword('carol_password')
        },
        {
          username: 'dave', 
          email: 'dave@example.com', 
          password_hash: hashedPassword('dave_password')
        }
      ]);
    });
};
