const express = require('express');

const projectManager = require('./projectManager-model');
const router = express.Router();

//returns a list of projects
router.get('/projects', (req, res) => {
	projectManager
		.getAllProjects()
		.then(proj => {
			res.json(proj);
		})
		.catch(err => {
			res.status(500).json({message: 'I failed you master... '});
		});
});

router.get('/resources', (req, res) => {
	projectManager
		.getAllResources()
		.then(resource => {
			res.json(resource);
		})
		.catch(err => {
			res.status(500).json({message: 'I failed you master... '});
		});
});
router.get('/tasks', (req, res) => {
	projectManager
		.getAllTasks()
		.then(task => {
			res.json(task);
		})
		.catch(error => {
			res.status(500).json({message: error});
		});
});

router.post('/projects', (req, res) => {
	const newProj = req.body;
	projectManager
		.addProjects(newProj)
		.then(proj => {
			res.status(201).json({message: 'Our numbers are growing!'});
		})
		.catch(err => {
			res.status(500).json({message: 'I failed you master... '});
		});
});

router.post('/resources', (req, res) => {
	const newReso = req.body;
	projectManager
		.addResources(newReso)
		.then(proj => {
			res.status(201).json({message: 'Our Powers are growing!'});
		})
		.catch(err => {
			res.status(500).json({message: 'I failed you master... '});
		});
});

router.post('/tasks', (req, res) => {
	const newTask = req.body;
	console.log('In tasks');
	projectManager
		.addTask(newTask)
		.then(proj => res.status(201).json({message: 'It will be done!'}))
		.catch(err => {
			res.status(500).json({message: 'That task is beneath even me!'});
		});
});

//Eventually put middleware here to verify values

module.exports = router;

// [ ] adding resources.
// - [ ] retrieving a list of resources.
// - [ ] adding projects.
// - [ ] retrieving a list of projects.
// - [ ] adding tasks.
// - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.
