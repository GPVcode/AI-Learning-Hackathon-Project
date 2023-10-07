export function up(knex) {
    return knex.schema.createTable('lessons', (table) => {
        table.increments('id').primary();
        table.integer('project_id').unsigned().references('id').inTable('projects').onDelete('CASCADE');
        table.string('title').notNullable();
        table.text('content').notNullable();
        table.integer('order').notNullable(); // order in which the lesson appears within its project
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}

export function down(knex) {
    return knex.schema.dropTable('lessons');
}
