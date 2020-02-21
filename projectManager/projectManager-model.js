const db = require('../data/db-config.js');

module.exports = {
	getAllProjects,
	getAllResources
};

function getAllResources() {
	return db('resources');
}

function getAllProjects() {
	return db('projects');
}

// [ ] adding resources.
// - [ ] retrieving a list of resources.
// - [ ] adding projects.
// - [ ] retrieving a list of projects.
// - [ ] adding tasks.
// - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.
