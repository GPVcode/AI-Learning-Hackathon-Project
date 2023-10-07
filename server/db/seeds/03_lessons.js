// seeds/02_lessons.js

export function seed(knex) {
  return knex('lessons').del()
    .then(function() {
      return knex('lessons').insert([
        {
          project_id: 1,  // Assuming the Tasktopia project has ID 1
          title: 'Awakening in Tasktopia',
          content: `
            As the sun rises, you find yourself in the land of Tasktopia, a place of ancient legends and immense power. A local sage approaches you, "Ah, Traveler! We've been waiting for you. The ancient Task Board is but a memory now, and we need your help to recreate it." You realize this isn't just any task (pun intended) -– it's your destiny. The sage hands you a scroll. "This," he says, "will guide you in your first steps."`,
          order: 1,
        },
        {
          project_id: 1,
          title: "Designing Tasktopia's Board",
          content: `
            The morning mist clears, revealing the bustling town square of Tasktopia. Citizens of all professions – from blacksmiths to wizards – are hard at work. In the center of it all stands the base of what once was the Task Board of legends. Only a faint etching remains of its original design. A skilled artisan named Elara approaches, her tools in hand. "Ah, Traveler! I've heard of your quest. Let's rebuild the Task Board, step by step, together."`,
          order: 2
        },
        {
          project_id: 1,
          title: "The Heart of Tasktopia",
          content: `
            Having deciphered the visual blueprints of the ancient Task Board, the whispers of Tasktopia guide you to another challenge – giving your creation a heartbeat, a soul. This will allow it to remember the tasks, long after they are written.

            You come across the ancient writings on the walls of a hidden temple: "In the heart of your creationeSQL., let the spirit of Knex join with the essence of Postgr Together, they shall give life to your board."
          `,
          order: 3
        },
        {
          project_id: 1,
          title: "Journey to the Nexus of Realms: Connecting Frontend and Backend",
          content: `
            As the heart of Tasktopia beats with a rhythm of its own, there's a distant realm—the Land of Illusions, also known as the Frontend. Both worlds must be connected, for in their unity lies unmatched power. Your next challenge is to weave the mystical bridges between these realms.
          `,
          order: 4
        },
        {
          project_id: 1,
          title: 'Testing',
          content: 'In the land of Tasktopia, the realm of Testing is akin to the ancient temples, where creations are subjected to divine trials. These trials, challenging and rigorous, determine whether the creations are ready for the world outside or if they need further refinement.',
          order: 5
        },
        {
          project_id: 1,
          title: 'Deployment',
          content: 'Beyond the mountains of Tasktopia lies the vast expanse known as the World Wide Web, a place where realms come to life and serve the masses. The ritual of Deployment is the bridge to this vast world, allowing your domain to be experienced by all.',
          order: 6
        }
      ]);
    });
}
