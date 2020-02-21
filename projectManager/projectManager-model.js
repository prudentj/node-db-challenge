const db = require('../data/db-config.js');

module.exports = {
	getAllProjects,
	getAllResources,
	getAllTasks,
	addProjects,
	addResources,
	addTask
};

function getAllResources() {
	return db('resources');
}

function getAllProjects() {
	return db('projects');
}
function getAllTasks() {
	return db('tasks')
		.join('projects', 'tasks.id', 'projects.id')
		.select('tasks.description as task_description');
}

//get by single id of project to verify resource exists
//get by single id of resource to verify resource exists

function addProjects(proj) {
	proj.completed ? (proj.completed = true) : (proj.completed = false);
	return db('projects').insert(proj, 'id');
}

function addResources(resources) {
	resources.completed
		? (resources.completed = true)
		: (resources.completed = false);
	return db('resources').insert(resources, 'id');
}

function addTask(task) {
	task.completed ? (task.completed = true) : (task.completed = false);
	return db('tasks').insert(task, 'id');
}

// [ ] adding resources.
// - [ ] retrieving a list of resources.
// - [ ] adding projects.
// - [ ] retrieving a list of projects.
// - [ ] adding tasks.
// - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.
