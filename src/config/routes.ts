import { Express } from "express";
// import { ScooterRouter } from '../api/v1/scooters'
import { citiesRouter } from "../api/v1/cities";
// import { scooterRouter } from '../api/v1/scooters'

export const setupRoutesV1 = (app: Express): void => {
  app.use("/v1/cities", citiesRouter);
  //   app.use('/v1/scooters', scooterRouter)
};
