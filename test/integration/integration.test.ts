/* eslint-disable @typescript-eslint/no-explicit-any */

import { initMongo, disconnectMongo } from '../setup'
import { User } from '../../src/models/User'
import { Cities } from '../../src/models/Cities'
import { SESSION_SECRET } from '../../src/config/secrets'

const mockedPutObject = jest.fn()
const mockedGetSignedUrl = jest.fn()

import app from 'app'
import { addValidCities } from '../helpers'
import request from 'supertest'

describe('API V1', () => {
  beforeEach(async () => initMongo())
  afterAll(disconnectMongo)

  describe('/cities', () => {
    describe('GET /', () => {
      it('should return 200 OK', async () => {
        const { body } = await request(app).get('/v1/cities').expect(200)
        expect(body).toMatchSnapshot()
      })
    })

    describe('GET /:id', () => {
      it('should return 200 OK', async () => {
        let id: string
        beforeEach(async () => {
          id = await addValidCities({
            id: 'GENERIC_CITY_ID',
            name: 'OSLO',
            scooters: [
              {
                id: 'GENERIC_SCOOTER_ID',
                isActive: true,
                vehicleType: 'scooter',
                vehicleColor: 'red',
                name: {
                  first: 'Jack',
                  last: 'Sparrow',
                },
                email: 'jack@mail.com',
                phone: '+123456789',
                deliveryAreas: [
                  {
                    name: 'Oslo, Street 1',
                  },
                ],
                location: {
                  type: 'Point',
                  coordinates: [-75, -75],
                },
              },
            ],
          })
        })

        it('should return a city', async () => {
          const { body } = await request(app)
            .get('/v1/cities/' + id)
            .expect(200)
          expect(body).toMatchSnapshot()
        })
      })
    })

    describe('GET /:id/scooters', () => {
      it('should return 200 OK', async () => {
        let id: string
        beforeEach(async () => {
          id = await addValidCities({
            id: 'GENERIC_CITY_ID',
            name: 'OSLO',
            scooters: [
              {
                id: 'GENERIC_SCOOTER_ID',
                isActive: true,
                vehicleType: 'scooter',
                vehicleColor: 'red',
                name: {
                  first: 'Jack',
                  last: 'Sparrow',
                },
                email: 'jack@mail.com',
                phone: '+123456789',
                deliveryAreas: [
                  {
                    name: 'Oslo, Street 1',
                  },
                ],
                location: {
                  type: 'Point',
                  coordinates: [-75, -75],
                },
              },
            ],
          })
        })

        it('should return a list of scooters', async () => {
          const { body } = await request(app)
            .get('/v1/cities/' + id + '/scooters')
            .expect(200)
          expect(body).toMatchSnapshot()
        })
      })
    })
  })
})
