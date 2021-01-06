import crypto from "crypto";
import jwt from "jsonwebtoken";
import { User } from "models/User";
import { SESSION_SECRET } from "config/secrets";
import { CityAPIFormat } from "../src/models/Cities";
import { City } from './../src/models/Cities';

interface JWTData {
    id: string;
    email: string;
    role: string;
    exp: string;
}
export interface JWTPayload {
    email: string;
    role: string;
    sub: string;
    exp: number;
}
export interface RegisterUserOptions {
    id?: string;
    role?: string;
    jwtExpiration?: string;
    randomize?: boolean;
    email?: string;
    password?: string;
}
export const GENERIC_UPLOAD_USER_ID = "GENERIC_UPLOAD_USER_ID";
export const signToken = (data: JWTData): string => {
    return jwt.sign(
        {
            email: data.email,
            role: data.role
        },
        SESSION_SECRET,
        {
            expiresIn: data.exp,
            subject: data.id
        }
    );
};

export const registerValidUser = async ({
    randomize = false,
    id = "GENERIC_USER_ID",
    role = "user",
    jwtExpiration = "5s",
    email = "valid@email.com",
    password = "valid_password"
}: RegisterUserOptions): Promise<string> => {
    const user = {
        email: randomize
            ? `${crypto.randomBytes(16).toString("hex")}@valid.com`
            : email,
        password: password,
        id: id,
        role: role
    };

    await User.create(user);

    return signToken({
        id: user.id,
        email: user.email,
        role: role,
        exp: jwtExpiration
    });
};



export const addValidCities = async ({ 
    id = "GENERIC_CITY_ID",
    name = "OSLO",
    scooters = [
        {
            id: "GENERIC_SCOOTER_ID";
            isActive: true,
            vehicleType: "scooter",
            vehicleColor: "red",
            name: {
              first: "Jack",
              last: "Sparrow",
            },
            email: "jack@mail.com",
            phone: "+123456789",
            deliveryAreas: [
              {
                name: "Oslo, Street 1",
              },
            ],
            location: {
              type: "Point",
              coordinates: [-75, -75],
            },
        }
    ]
}: CityAPIFormat): Promise<string> => {
    const cities = { 
        id: id,
        name: name,
        scooters: scooters  
    };

    await City.create(cities);

    return id;
};