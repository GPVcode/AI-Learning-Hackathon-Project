export function up(knex) {
    return knex.schema.createTable('user_progress', (table) => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.integer('steps_id').unsigned().references('id').inTable('steps').onDelete('CASCADE');
        table.boolean('completed').defaultTo(false);
        table.timestamp('last_accessed').defaultTo(knex.fn.now());
    });
}

export function down(knex) {
    return knex.schema.dropTable('user_progress');
}
