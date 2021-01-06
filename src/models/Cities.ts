import mongoose from 'mongoose'
import UUID from 'uuid/v4'

export interface Cities {
  name: string
  scooters: Array<ScooterFormat>
}
export interface CityAPIFormat {
  id: string
  name: string
  scooters: Array<ScooterFormat>
}

export interface ScooterFormat {
  id: String
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
    coordinates: [Number, Number]
  }
}

export interface Scooters {
  scooters: Array<ScooterFormat>
}

export type CityDocument = mongoose.Document & {
  id: string
  name: string
  scooters: Array<ScooterFormat>

  getScooters: () => Scooters
}

const citySchema = new mongoose.Schema(
  {
    id: { type: String, default: UUID, unique: true },
    name: { type: String, unique: true },
    scooters: { type: Array },
  },
  { timestamps: true },
)

citySchema.methods = {
  getScooters: function (): Scooters {
    const result = {
      scooters: this.scooters,
    }

    return result
  },
}

export const City = mongoose.model<CityDocument>('cities', citySchema)
