const express = require('express')

const db = require('../db/db')

const router = express.Router()

// put routes here
router.get('/categories', (req, res) => {
  db.getCategories()
    .then(results => {
      console.log(results)
      res.json(results)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Could not get categories.' })
    })
})

router.get('/cuisines/', (req, res) => {
  const id = 71
  console.log('hello')
  db.getCuisines(id)
    .then(results => {
      console.log(results)
      res.json(results)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Could not get cuisines.' })
    })
})

router.get('/cuisines/:city_id', (req, res) => {
  const id = req.params.city_id
  db.getCuisines(id)
    .then(results => {
      console.log(results)
      res.json(results)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Could not get cuisines.' })
    })
})

module.exports = router