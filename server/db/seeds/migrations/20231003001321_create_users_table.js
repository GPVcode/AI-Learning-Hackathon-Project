export function up(knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();  // Primary key
        table.string('username').notNullable().unique();  // Unique username
        table.string('email').notNullable().unique();  // Unique email
        table.string('password_hash').notNullable();  // Password hash
        table.string('password_reset_token');  // Token for password reset
        table.timestamp('password_reset_expires');  // Expiration of the password reset token
        table.timestamp('last_login_at');  // Last login timestamp
        table.timestamp('created_at').defaultTo(knex.fn.now());  // Created at timestamp
    });

}

export function down(knex) {
    return knex.schema.dropTable('users');  
}
