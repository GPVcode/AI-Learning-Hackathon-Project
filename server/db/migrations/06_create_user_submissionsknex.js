export function up(knex) {
    return knex.schema.createTable('user_submissions', (table) => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.integer('steps_id').unsigned().references('id').inTable('steps').onDelete('CASCADE');
        table.text('submitted_code').notNullable();
        table.boolean('is_correct').defaultTo(false);
        table.text('feedback');  // feedback received either manually or via OpenAI
        table.timestamp('submitted_at').defaultTo(knex.fn.now());
    });
}

export function down(knex) {
    return knex.schema.dropTable('user_submissions');
}
