const express = require('express')

const db = require('../db/db')

const router = express.Router()

// put routes here
router.get('/categories', (req, res) => {
  db.getCategories()
    .then(categories => {
      console.log(categories)
      res.json(categories)
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Could not get categories.' })
    })
})

module.exports = router