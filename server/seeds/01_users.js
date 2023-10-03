import { hash } from 'bcrypt';

export function seed(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(async function () {
      // Hash passwords
      const aliceHashedPassword = await hash('password_for_alice', 10);  // Replace 'password_for_alice' with the actual password for Alice
      const bobHashedPassword = await hash('password_for_bob', 10);  // Similarly, replace for Bob
      const charlieHashedPassword = await hash('password_for_charlie', 10);  // And for Charlie

      // Inserts seed entries with hashed passwords
      return knex('users').insert([
        {
          username: 'alice123',
          email: 'alice@example.com',
          password_hash: aliceHashedPassword
        },
        {
          username: 'bob456',
          email: 'bob@example.com',
          password_hash: bobHashedPassword
        },
        {
          username: 'charlie789',
          email: 'charlie@example.com',
          password_hash: charlieHashedPassword
        }
      ]);
    });
}
