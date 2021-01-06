import mongoose from "mongoose";
import UUID from "uuid/v4";

export interface Scooters {
  id: string;
  name: string;
  status: boolean;
  location: {
    type: string;
    coordinates: [number];
  };
}
export interface ScooterAPIFormat {
  id: string;
  isActive: boolean;
  vehicleType: string;
  vehicleColor: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  deliveryAreas: [
    {
      name: string;
    },
  ];
  location: {
    type: string;
    coordinates: [number];
  };
}

export interface ScooterLocation {
  location: {
    type: string;
    coordinates: [number];
  };
}

export type ScooterDocument = mongoose.Document & {
  id: string;
  isActive: boolean;
  vehicleType: string;
  vehicleColor: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  deliveryAreas: [
    {
      name: string;
    },
  ];
  location: {
    type: string;
    coordinates: [number];
  };

  getLocation: () => ScooterAPIFormat;
}

const scooterSchema = new mongoose.Schema({
  id: { type: String, default: UUID, unique: true },
  name: { type: String, unique: true },
  status: { type: Boolean },
  location: { type: Object },
});

scooterSchema.methods = {
  getLocation: function (): ScooterLocation {
    const result = {
      location: this.location,
    };

    return result;
  },
};

export const Scooter = mongoose.model<ScooterDocument>(
  "scooters",
  scooterSchema,
);
