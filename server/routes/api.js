const express = require('express')

const db = require('../db/db')

const router = express.Router()

// put routes here
router.get('/categories', (req, res) => {
  db.getCategories()
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Could not get categories.' })
    })
})

router.get('/cities', (req, res) => {
  const city = 'Wellington'
  db.getCity(city)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Could not get city.' })
    })
})

router.get('/cities/:city_name', (req, res) => {
  const city = req.params.city_name
  db.getCity(city)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Could not get city.' })
    })
})


router.get('/cuisines', (req, res) => {
  const id = 71
  db.getCuisines(id)
    .then(results => {
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
      res.json(results)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Could not get cuisines.' })
    })
})

module.exports = router