export function up(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();  // Primary key
        table.string('username').notNullable().unique();  // Unique username
        table.string('email').notNullable().unique();  // Unique email
        table.string('password_hash').notNullable();  // Password hash
        table.timestamp('created_at').defaultTo(knex.fn.now());  // Created at timestamp
    });
}

export function down(knex) {
    return knex.schema.dropTable('users');  // This will drop the table, used to rollback the migration
}
