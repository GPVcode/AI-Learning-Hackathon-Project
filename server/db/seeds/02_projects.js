export function seed(knex) {
  return knex('projects').del()
    .then(function() {
      return knex('projects').insert([
        { 
          title: 'Tasktopia', 
          description: 'Recreate the ancient Task Board of Tasktopia.', 
          difficulty: 'easy' 
        },
      ]);
    });
}
