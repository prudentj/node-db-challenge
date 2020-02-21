const express = require('express');

const projectManager = require('./projectManager-model');
const router = (express = express.Router());

//returns a list of projects
router.get('/', (req, res) => {
	projectManager
		.getAllProjects()
		.then(proj => {
			res.json(proj);
		})
		.catch(err => {
			res.status(500).json({message: 'I failed you master... '});
		});
});

router.get('/resource', (req, res) => {
	projectManager
		.getAllResources()
		.then(resource => {
			res.json(resource);
		})
		.catch(err => {
			res.status(500).json({message: 'I failed you master... '});
		});
});
module.exports = router;

// [ ] adding resources.
// - [ ] retrieving a list of resources.
// - [ ] adding projects.
// - [ ] retrieving a list of projects.
// - [ ] adding tasks.
// - [ ] retrieving a list of tasks. **The list of tasks should include the project name and project description**.
