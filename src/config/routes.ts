import { Express } from 'express'
import { citiesRouter } from '../api/v1/cities'
import { helloRouter } from '../api/v1/hello'

export const setupRoutesV1 = (app: Express): void => {
  app.use('/v1/cities', citiesRouter)
  app.use('/v1/cities', helloRouter)
}
