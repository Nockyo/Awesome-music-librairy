import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();
const {ACCESS_TOKEN_SECRET} = process.env;

export const authentificateToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; //'Bearer AOUGDFUAGFGUAIDIULIAIDGG' => ['Bearer','AOUGDFUAGFGUAIDIULIAIDGG']

    if(!token) {
        return res.sendStatus(401)
    }

    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, data) => {
        if(err) {
            return res.sendStatus(401);
        }
        req.data = data;
        next();
    });
}