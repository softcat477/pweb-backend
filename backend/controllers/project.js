const router = require('express').Router()
const Project = require('../models/projects')

// Get all projects
router.get('/', async(request, response) => {
  const projects = await Project.find({})
  response.json(projects)
})

module.exports = router