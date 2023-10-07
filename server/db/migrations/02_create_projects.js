export function up(knex) {
    return knex.schema.createTable('projects', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.enum('difficulty', ['easy', 'medium', 'hard']).defaultTo('easy');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}

export function down(knex) {
    return knex.schema.dropTable('projects');
}
