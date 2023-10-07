// seeds/03_steps.js

export function seed(knex) {
  return knex('steps').del()
    .then(function() {
      return knex('steps').insert([
        {
          lesson_id: 1, // Assuming the lesson "Awakening in Tasktopia" has ID 1
          title: 'Harnessing the Power of Node.js and npm',
          content: 'Legends speak of a mighty tool named Node.js, accompanied by its trusty companion npm. These are the sources of great power that you need to commence your quest. - First, ensure you have Node.js and npm installed. If not, [follow this guide](https://nodejs.org/en/download/) to harness their energy. - To test your connection to this newfound power, run the following spells in your command terminal:',
          solution_code: ' node -v && npm -v ',
          expected_outcome: 'Displays versions of Node.js and npm', //evaluated by ai?
          hint: 'Make sure to install both Node.js and npm from their official site.',
          order: 1
        },
        {
          lesson_id: 1,
          title: 'Crafting the Enchanted Scroll (Project Initialization)',
          content: "With the power of Node.js and npm at your fingertips, it's time to craft your enchanted scroll – your project. - Summon your terminal and navigate to where you want your project to reside.",
          solution_code: 'npm init -y',
          expected_outcome: 'Initializes a new npm project',
          hint: 'Navigate to the desired directory first.',
          order: 2
        },
        {
          lesson_id: 1,
          title: 'Gathering Your Tools (Installing Libraries)',
          content: 'Every hero needs their tools. The ancient Task Board was known to be powered by mystical frameworks like Express for the backend and React for its radiant interface. - For the backend, invoke Express into your realm:',
          solution_code: 'npm install express && (npx create-react-app client)',
          expected_outcome: 'Installs Express and initializes either a React application',
          hint: "The sage nods in approval. 'You're on the right path, Traveler. As you harness these tools, remember the essence of Tasktopia - balance and purpose. Now, proceed to the next phase of your journey.'",
          order: 3
        },
        {
          lesson_id: 2, // Designing Tasktopia's Board
          title: `Crafting the Board's Blueprint`, 
          content: `
            Before the construction begins, you need a plan. The ancient board was known for its simplicity and elegance.

            Start with a parchment (an HTML file). Draw (design) three main components:
            An input field where Tasktopians can whisper their tasks.
            A button, gleaming and sturdy, ready to commit tasks to the board.
            A scroll (a list), where each task finds its place among its peers.
            Your HTML might resemble:`,
          solution_code: `
            // HTML code
            <input type="text" id="taskInput" placeholder="Whisper your task...">
            <button id="submitTask">Commit to the Board</button>
            <ul id="taskList"></ul>
          `,
          expected_outcome: 'A visual layout with an input field, a button, and an empty list.',
          hint: `You will use HTML code.`,
          order: 1
        },
        {
          lesson_id: 2,
          title: 'Infusing the Board with Magic (Interactivity)',
          content: 'With the board\'s layout set, it\'s time to infuse it with the magic of Tasktopia – the ability to add, remove, and mark tasks.',
          solution_code: `
              // script.js code
              document.getElementById('submitTask').addEventListener('click', function() {
                  const task = document.getElementById('taskInput').value;
                  if (task) {
                      const li = document.createElement('li');
                      li.textContent = task;
                      document.getElementById('taskList').appendChild(li);
                  }
              });

              document.getElementById('taskList').addEventListener('click', function(e) {
                  if (e.target.tagName === 'LI') {
                      e.target.classList.toggle('completed');
                  }
              });
          `,
          expected_outcome: 'Tasks can be added to the list, and existing tasks can be marked as completed by clicking on them.',
          hint: 'Summon your spellbook (a JavaScript file) and cast the first spell to make the "Commit to the Board" button come alive. Then, give Tasktopians the ability to mark a task as complete or remove it. Add a little magic (event listener) to each task that allows it to respond to a click: javascript:',
          order: 2
        },
        {
          lesson_id: 3,  // Heart of Tasktopia.
          title: 'Summoning Knex and PostgreSQL',
          content: `
            Before the Task Board can pulsate with life, it craves the ancient powers of Knex and PostgreSQL. Only when these spirits intertwine shall your board awaken!`,
          solution_code: `
            // The folliwing two lines are ran in terminal
            npm install knex pg
            npx knex init

            // knexfile.js
            module.exports = {
              development: {
                client: 'pg',  // our database engine
                connection: {
                  host: 'localhost',
                  user: 'your_db_username', 
                  password: 'your_db_password',
                  database: 'tasktopia'
                },
                migrations: {
                  directory: './data/migrations'  // the location of our data migrations folder
                },
                seeds: {
                  directory: './data/seeds'  // the location of our data seeds folder
                }
              },
            };
            
          `,
          expected_outcome: `
            Installation of Knex and PostgreSQL drivers. A knexfile.js generated in the root of the project.
          `,
          hint: `Dive into knexfile.js and set up the connection details for developement`,
          order: 1
        },
        {
          lesson_id: 3,
          title: 'Crafting the Sacred Blueprints of Tasktopia',
          content: `
            Every kingdom requires foundations; every realm, a structure. Inscribe the design for the sanctuary where tasks shall reside for eternity within the heart of Tasktopia. To make sure your tasks have a designated place in the kingdom, you need to set up the database structure. We do this using migrations. This will define how the tasks are stored in the heart of Tasktopia (your PostgreSQL database).
          `,
          solution_code: `
            // the following line is ran in your terminal
            npx knex migrate:make create_tasks_table
        
            // Inside the generated file in './migrations':
            exports.up = function(knex) {
              return knex.schema.createTable('tasks', (table) => {
                table.increments('id').primary();
                table.string('name').notNullable();
                table.boolean('completed').defaultTo(false);
              });
            };
        
            exports.down = function(knex) {
              return knex.schema.dropTable('tasks');
            };
        
            // After defining the migration, run it in your terminal:
            npx knex migrate:latest
          `,
          expected_outcome: `
            A new migration file is created under './migrations'. After running the migration, the 'tasks' table should be created in your 'tasktopia' database.
          `,
          hint: [
            "Make sure you're in the root directory of your project when running migration commands.",
            "Check the generated migration file to ensure the table structure matches your app's requirements.",
            "If you encounter any errors, ensure that the Knex and database configurations are correct and that the database server is running."
          ].join(' '),
          order: 2
        },        
        {
          lesson_id: 3,
          title: "Crafting the Routes of Power",
          content: "With the spirit of knex tethered to your quest and in communion with PostgreSQL, you stand on the cusp of mastering the four sacred rites of CRUD. Will you seize this power?",
          solution_code: `
            // index.js file in server
            const express = require('express');
            const knexConfig = require('./knexfile').development;
            const knex = require('knex')(knexConfig);
        
            const app = express();
            app.use(express.json()); // allows our app to read JSON data
        
            // Retrieve all tasks
            app.get('/tasks', (req, res) => {
              knex.select('*').from('tasks')
                .then(tasks => {
                  res.status(200).json(tasks);
                })
                .catch(err => {
                  res.status(500).json({ message: 'Failed to retrieve tasks' });
                });
            });
        
            // Create a new task
            app.post('/tasks', (req, res) => {
              const task = req.body;
        
              knex('tasks').insert(task)
                .then(ids => {
                  res.status(201).json(ids[0]);
                })
                .catch(err => {
                  res.status(500).json({ message: 'Failed to create new task' });
                });
            });
        
            // Update a specific task by ID
            app.put('/tasks/:id', (req, res) => {
              const changes = req.body;
        
              knex('tasks').where('id', req.params.id).update(changes)
                .then(count => {
                  if (count) {
                    res.status(200).json({ message: \`\${count} task(s) updated\` });
                  } else {
                    res.status(404).json({ message: 'Task not found' });
                  }
                })
                .catch(err => {
                  res.status(500).json({ message: 'Failed to update task' });
                });
            });
        
            // Delete a specific task by ID
            app.delete('/tasks/:id', (req, res) => {
              knex('tasks').where('id', req.params.id).del()
                .then(count => {
                  if (count) {
                    res.status(200).json({ message: \`\${count} task(s) deleted\` });
                  } else {
                    res.status(404).json({ message: 'Task not found' });
                  }
                })
                .catch(err => {
                  res.status(500).json({ message: 'Failed to delete task' });
                });
            });
          `,
          expected_outcome: "Routes set up for creating, reading, updating, and deleting tasks.",
          hint: [
            "Ensure you have set up your Express server.",
            "The `knex` instance you use is a connection to your database. Always ensure your DB connection is active.",
            "Ensure your knexfile configuration matches your database setup.",
            "Remember to start the server using a listening port, otherwise, you won't be able to access these routes.",
            "Before testing POST, PUT, and DELETE routes, consider using tools like Postman to simulate requests and check the results.",
            "Ensure your database has a 'tasks' table structured correctly."
          ].join(' '),
          order: 3
        },
        {
          lesson_id: 3,
          title: 'Awakening the Ethereal Server’s Spirit',
          content: 'The paths have been paved, the designs inscribed. Now, chant the final incantation to breathe life into the server, awakening it from its slumber and beckoning it to heed your call.',
          solution_code: `
            const PORT = 4000; // this number is arbitrary

            app.listen(PORT, () => {
              console.log(\`Server is alive on port \${PORT}\`);
            });
          `,
          expected_outcome: 'Server starts and listens on the specified port, ready to accept requests.',
          hint: 'Ensure no other services are running on the port you choose. Look up how to run your server from terminal',
          order: 4
        },
        {
          lesson_id: 4, // The lesson "Emissaries of Initialization - Fetching the Tasks"
          title: 'Emissaries of Initialization - Fetching the Tasks',
          content: `
            Upon the dawn of Tasktopia, as your interface awakens, it seeks knowledge of tasks from ages past. These tasks reside in the heart of Tasktopia, guarded by the backend guardians. You must send an emissary (a GET request) to seek this wisdom.
                    - Use the power of fetch in the frontend realm to communicate with your backend.
          `,
          solution_code: `
            // Assuming you're working within a React component

            componentDidMount() {
              fetch('/tasks')
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Failed to fetch tasks');
                  }
                  return response.json();
                })
                .then(data => {
                  this.setState({ tasks: data });
                })
                .catch(error => {
                  console.error('Error:', error);
                });
            }
          `,
          expected_outcome: 'Tasks are fetched from the backend and stored in the frontend state upon component initialization.',
          hint: 'Ensure your backend server is running and the route for "/tasks" is correctly set up to return all tasks. Always handle potential errors when making network requests.',
          order: 1
        },
        {
          lesson_id: 4,
          title: 'Chronicles of Creation - Posting New Tasks',
          content: `The Tasktopians have spoken! New tasks beckon creation. To heed their call, craft a spell that channels their desires to the heart of Tasktopia.
                    - Use the power of fetch in the frontend realm to send (POST) the new tasks to your backend.`,
          solution_code: `
            // Assuming you're working within a React component

            addTask(task) {
              fetch('/tasks', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
              })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Failed to post the task');
                }
                return response.json();
              })
              .then(data => {
                this.setState(prevState => ({
                  tasks: [...prevState.tasks, data]
                }));
              })
              .catch(error => {
                console.error('Error:', error);
              });
            }
          `,
          expected_outcome: 'New tasks can be added to the backend from the frontend and then be reflected in the frontend state.',
          hint: 'Ensure your backend server is running and that the POST route for "/tasks" is correctly set up to accept and store new tasks. When making network requests, always handle potential errors and feedback to the user.',
          order: 2
        },
        {
          lesson_id: 4,
          title: 'Rites of Revelation - Updating Tasks',
          content: `As the winds of change sweep over Tasktopia, some tasks require evolution. Master the arts to update tasks, drawing upon the ancient scrolls of HTTP methods.
                    - Call forth the power of fetch in the frontend realm to amend (PUT) the tasks in your backend.`,
          solution_code: `
            // Within a React component, for example

            updateTask(taskId, updatedTask) {
              fetch(\`/tasks/\${taskId}\`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTask)
              })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Failed to update the task');
                }
                return response.json();
              })
              .then(data => {
                this.setState(prevState => ({
                  tasks: prevState.tasks.map(task => 
                    task.id === taskId ? data : task
                  )
                }));
              })
              .catch(error => {
                console.error('Error:', error);
              });
            }
          `,
          expected_outcome: 'Existing tasks can be updated in the backend from the frontend. Once updated, the frontend state should reflect these changes.',
          hint: 'Ensure your backend server is active and that the PUT route for "/tasks/:id" is correctly set up to update tasks. Always consider error handling and user feedback when executing network requests.',
          order: 3
        },
        {
          lesson_id: 4, // As it belongs to the lesson "Journey to the Nexus of Realms: Connecting Frontend and Backend"
          title: 'Rituals of Release - Deleting Tasks',
          content: `Every saga has an ending. In Tasktopia, tasks that have met their destiny must be set free. Learn the sacred ceremonies to release tasks into the void.
                    - Use the mystic spells of fetch in the frontend realm to banish (DELETE) the tasks from your backend.`,
          solution_code: `
            // Within a React component, for example

            deleteTask(taskId) {
              fetch(\`/tasks/\${taskId}\`, {
                method: 'DELETE',
              })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Failed to delete the task');
                }
                return response.json();
              })
              .then(() => {
                this.setState(prevState => ({
                  tasks: prevState.tasks.filter(task => task.id !== taskId)
                }));
              })
              .catch(error => {
                console.error('Error:', error);
              });
            }
          `,
          expected_outcome: 'Tasks can be deleted from the backend through the frontend interface. After deletion, the frontend state should no longer contain the banished task.',
          hint: 'Ensure your backend server is alive and that the DELETE route for "/tasks/:id" is correctly set up to remove tasks. Remember to account for potential errors and provide feedback to users when necessary.',
          order: 4
        },
        {
          lesson_id: 5,
          title: 'Dive into Frontend Testing',
          content: `Prepare for the trials of the frontend:
                    - Ensure UI looks as expected.
                    - Validate that tasks can be added, completed, and deleted.`,
          solution_code: `
            /* Frontend test sample (using Jest and React Testing Library) */

            // tasks.test.js

            import { render, screen, fireEvent } from '@testing-library/react';
            import Tasks from './Tasks';

            test('UI looks as expected', () => {
              render(<Tasks />);
              expect(screen.getByText('Add Task')).toBeInTheDocument();
            });
          `,
          expected_outcome: 'Frontend tests run successfully without errors. The UI behaves as expected.',
          hint: 'Use tools like Jest and React Testing Library to simulate user actions and verify outcomes.',
          order: 1
        },

        // Step 2: Backend Testing
        {
          lesson_id: 5,
          title: 'Embark on Backend Testing',
          content: `Now, venture into the deep dungeons of the backend:
                    - Ensure routes return expected responses.
                    - Validate that database operations are successful.`,
          solution_code: `
            /* Backend test sample (using Jest and supertest) */

            // routes.test.js

            const request = require('supertest');
            const app = require('../app'); 

            test('GET /tasks returns expected tasks', async () => {
              const response = await request(app).get('/tasks');
              expect(response.status).toBe(200);
              expect(response.body).toEqual(expect.any(Array));
            });
          `,
          expected_outcome: 'Backend tests run successfully without errors. Routes and database interactions work flawlessly.',
          hint: 'Leverage Jest and supertest for backend testing, making sure to mock any external dependencies.',
          order: 2
        },
        {
          lesson_id: 6,
          title: 'Selecting a Deployment Platform',
          content: `Like choosing a mount for your journey, the platform for deployment is crucial:
                    - Weigh the pros and cons of platforms such as Heroku, Vercel, and Netlify.
                    - Consider factors like scalability, ease of use, and support for backend deployments.`,
          solution_code: `
            /* Note: This is a decision-making step, so there's no specific code solution. 
               However, a guideline can be provided. */

            Guideline:
            - For full-stack applications, Heroku offers great support for both frontend and backend.
            - For frontend-focused projects, Vercel and Netlify shine with their CI/CD integration.
          `,
          expected_outcome: 'A suitable deployment platform has been selected based on the project’s requirements.',
          hint: 'Consider the long-term goals of your project and how much traffic you anticipate.',
          order: 1
        },

        // Step 2: Awakening the Backend
        {
          lesson_id: 6,
          title: 'Deploying the Backend and Database',
          content: `The backend, the heart of your realm, must be securely planted in the vast expanse:
                    - Follow platform-specific guidelines for backend deployment.
                    - Ensure the database is also set up and accessible.`,
          solution_code: `
            /* Sample for deploying a backend on Heroku */

            // Terminal Commands:

            $ heroku create your-app-name
            $ git push heroku main
            $ heroku run knex migrate:latest
          `,
          expected_outcome: 'The backend is live and accessible, and the database is operational.',
          hint: 'Always secure your database credentials and use environment variables for sensitive data.',
          order: 2
        },

        // Step 3: Unfurling the Frontend
        {
          lesson_id: 6,
          title: 'Deploying the Frontend',
          content: `The visuals, the gateway to your domain, must shine brightly for all to see:
                    - Deploy the frontend based on the chosen platform’s guidelines.`,
          solution_code: `
            /* Sample for deploying a frontend on Netlify */

            // Terminal Commands:

            $ netlify deploy --prod
          `,
          expected_outcome: 'The frontend is live, displaying content and visuals as designed.',
          hint: 'Ensure all assets are properly optimized and paths are correctly set for a production environment.',
          order: 3
        },

        // Step 4: The Grand Connection
        {
          lesson_id: 6,
          title: 'Ensuring Seamless Operation',
          content: `Your realm is vast, but each part must work in harmony:
                    - Ensure the live app connects correctly between frontend and backend.
                    - Verify operations, from task addition to deletion, function flawlessly.`,
          solution_code: `
            /* Testing connection between frontend and backend */

            // Frontend code:

            fetch('https://your-backend-url.com/api/tasks')
              .then(response => response.json())
              .then(data => console.log(data));
          `,
          expected_outcome: 'The live app operates seamlessly, with the frontend and backend interacting without hitches.',
          hint: 'Use browser developer tools to monitor network requests and ensure data flows correctly.',
          order: 4
        }
      ]);
    });
}
