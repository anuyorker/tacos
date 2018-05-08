const express = require('express');
const router = express.Router();

const Taco = require('../models/taco');

router.get('/tacos', (req, res, next) => {
  Taco.findAll()
    .then(tacos => res.json(tacos))
    .catch(next);
});

router.post('/tacos', (req, res, next) => {
  Taco.findOrCreate({
    where: {
      name: req.body.name
    },
    defaults: {
      spicy: req.body.spicy
    }
  })
    .then(([taco, newlyCreated]) => {
      if (newlyCreated) {
        res.status(201);
      }
      res.json(taco);
    })
    .catch(next);
});

router.get('/tacos/:id', (req, res, next) => {
  Taco.findById(req.params.id)
  .then(taco => {
    if (taco) {
      res.json(taco);
    } else {
      res.sendStatus(404);
    }
  })
  .catch(next);
});

router.use((req, res) => {
  res.sendStatus(404);
});

module.exports = router;
