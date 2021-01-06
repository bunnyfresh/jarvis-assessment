import express from 'express'

import {
  deleteCity,
  getCities,
  getCity,
  postCity,
  addCityScooter,
  removeCityScooter,
  getCityScooters,
} from './controller'

const router = express.Router()

// Sliding session - also used to refresh jwt payload (such as role change)
router.get('/', getCities)
router.get('/:id', getCity)
router.get('/:id/scooters', getCityScooters)
router.post('/:id/scooters', addCityScooter)
router.delete('/:id/scooters/:scooter', removeCityScooter)
router.post('/', postCity)
router.delete('/:id', deleteCity)

export const citiesRouter = router
