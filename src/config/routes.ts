import { Express } from 'express'
import { citiesRouter } from '../api/v1/cities'

export const setupRoutesV1 = (app: Express): void => {
  app.use('/v1/cities', citiesRouter)
}
