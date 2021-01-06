import mongoose from 'mongoose'
import UUID from 'uuid/v4'

export interface Scooters {
  id: string
  name: string
  status: boolean
  location: {
    type: String
    coordinates: [Number]
  }
}
export interface ScooterAPIFormat {
  id: string
  isActive: Boolean
  vehicleType: String
  vehicleColor: String
  name: {
    first: String
    last: String
  }
  email: String
  phone: String
  deliveryAreas: [
    {
      name: String
    },
  ]
  location: {
    type: String
    coordinates: [Number]
  }
}

export interface ScooterLocation {
  location: {
    type: String
    coordinates: [Number]
  }
}

export type ScooterDocument = mongoose.Document & {
  id: string
  isActive: Boolean
  vehicleType: String
  vehicleColor: String
  name: {
    first: String
    last: String
  }
  email: String
  phone: String
  deliveryAreas: [
    {
      name: String
    },
  ]
  location: {
    type: String
    coordinates: [Number]
  }

  getLocation: () => ScooterAPIFormat
}

const scooterSchema = new mongoose.Schema({
  id: { type: String, default: UUID, unique: true },
  name: { type: String, unique: true },
  status: { type: Boolean },
  location: { type: Object },
})

scooterSchema.methods = {
  getLocation: function (): ScooterLocation {
    const result = {
      location: this.location,
    }

    return result
  },
}

export const Scooter = mongoose.model<ScooterDocument>(
  'scooters',
  scooterSchema,
)
