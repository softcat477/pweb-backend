const router = require('express').Router()
const Project = require('../models/projects')

// Get all projects
router.get('/', async(request, response) => {
  const projects = await Project.find({})
  response.json(projects)
})

// // Add a new project
// router.post('/', async (request, response, next)=> {
//   const body = request.body
// 
//   const project = new Project({
//     title: body.title,
//     description: body.description,
//     link: body.link,
//     bullets: body.bullets,
//     skills: body.skills,
//     order: body.order
//   })
// 
//   const result = await project.save()
// 
//   response.status(201).json(result)
// })

module.exports = router