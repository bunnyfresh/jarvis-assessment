import { Response, Request, NextFunction } from 'express'
import { City } from '../../../models/cities'
import { SUCCESSFUL_RESPONSE } from '../../../util/success'
var ObjectID = require('mongodb').ObjectID

export const postCity = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const city = await City.insertMany([{ name: req.body.name }])
    res.status(200).json(city)
  } catch (error) {
    next(error)
  }
}
export const addCityScooter = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const city = await City.findOne({ id: req.params.id })
    city.scooters = [
      ...city.scooters,
      {
        id: new ObjectID(),
        isActive: req.body.status,
        vehicleType: req.body.vehicleType,
        vehicleColor: req.body.vehicleColor,
        name: {
          first: req.body.f_name,
          last: req.body.l_name,
        },
        email: req.body.email,
        phone: req.body.phone,
        deliveryAreas: [
          {
            name: req.body.deliveryArea,
          },
        ],
        location: { type: 'Point', coordinates: [req.body.lat, req.body.lng] },
      },
    ]
    city.save()
    res.status(200).json(city)
  } catch (error) {
    next(error)
  }
}

export const editCityScooter = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const city = await City.findOne({ id: req.params.id })

    let indx = city.scooters.findIndex((s) => s.id === req.params.scooter)
    if (indx !== -1) {
      city.scooters[indx] = {
        id: new ObjectID(),
        isActive: req.body.status,
        vehicleType: req.body.vehicleType,
        vehicleColor: req.body.vehicleColor,
        name: {
          first: req.body.f_name,
          last: req.body.l_name,
        },
        email: req.body.email,
        phone: req.body.phone,
        deliveryAreas: [
          {
            name: req.body.deliveryArea,
          },
        ],
        location: {
          type: 'Point',
          coordinates: [req.body.lat, req.body.lng],
        },
      }
      city.save()
    }

    res.status(200).json(city)
  } catch (error) {
    next(error)
  }
}

export const getCityScooters = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const city = await City.findOne({ id: req.params.id })
    res.status(200).json(city.scooters)
  } catch (error) {
    next(error)
  }
}
export const removeCityScooter = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const city = await City.findOne({ id: req.params.id })
    let indx = city.scooters.findIndex((s) => s.id === req.params.scooter)
    if (indx !== -1) city.scooters.splice(indx, 1)
    res.status(200).json(city)
  } catch (error) {
    next(error)
  }
}
export const getCities = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const city = await City.find()
    res.status(200).json(city)
  } catch (error) {
    next(error)
  }
}

export const getCity = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const city = await City.findOne({ id: req.params.id })
    res.status(200).json(city)
  } catch (error) {
    next(error)
  }
}
export const deleteCity = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    await City.deleteOne({ id: req.params.id })
    res.status(200).json(SUCCESSFUL_RESPONSE)
  } catch (error) {
    next(error)
  }
}
