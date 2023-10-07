export function up(knex) {
    return knex.schema.createTable('steps', (table) => {
        table.increments('id').primary();
        table.integer('lesson_id').unsigned().references('id').inTable('lessons').onDelete('CASCADE');
        table.string('title').notNullable();
        table.text('content').notNullable(); 
        table.text('solution_code').notNullable(); 
        table.text('expected_outcome'); 
        table.text('hint');
        table.integer('order').notNullable(); // order in which the step appears within its lesson
    });
}

export function down(knex) {
    return knex.schema.dropTable('steps');
}
