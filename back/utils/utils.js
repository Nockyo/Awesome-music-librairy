import bcrypt from 'bcrypt';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';

dotenv.config();
const {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} = process.env;

//Créer l'access token
export function generateAccessToken(data) {
    return jwt.sign({data}, ACCESS_TOKEN_SECRET, {expiresIn: '7200s'});
}

//Créer l'access token
export function generateRefreshToken(data) {
    return jwt.sign({data}, REFRESH_TOKEN_SECRET, {expiresIn: '1y'});
}

// compare password
export async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}