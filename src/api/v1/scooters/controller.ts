import { Response, Request, NextFunction } from 'express'
import { Scooter } from '../../../models/scooters'
import { SUCCESSFUL_RESPONSE } from '../../../util/success'

export const postScooter = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const scooter = await Scooter.insertMany([{ name: req.body.name }])
    res.status(200).json(scooter)
  } catch (error) {
    next(error)
  }
}
export const getCityScooter = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const scooter = await Scooter.findOne({ id: req.params.id })
    res.status(200).json(scooter.getLocation())
  } catch (error) {
    next(error)
  }
}
export const getScooterLocation = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const scooter = await Scooter.findOne({ id: req.params.id })
    res.status(200).json(scooter.getLocation())
  } catch (error) {
    next(error)
  }
}
export const getScooters = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const scooter = await Scooter.find()
    res.status(200).json(scooter)
  } catch (error) {
    next(error)
  }
}

export const getScooter = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const scooter = await Scooter.findOne({ id: req.params.id })
    res.status(200).json(scooter)
  } catch (error) {
    next(error)
  }
}
export const deleteScooter = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    await Scooter.deleteOne({ id: req.params.id })
    res.status(200).json(SUCCESSFUL_RESPONSE)
  } catch (error) {
    next(error)
  }
}
