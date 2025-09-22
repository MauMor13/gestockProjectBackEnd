import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const secretKey : string = config.jwtSecretKey || 'default';

// Crear un token
export const createToken = (payload : string) => {
     try {
          return jwt.sign(payload, secretKey, { expiresIn: '24h' });
     } catch (error) {
          console.error("Error creating token:", error);
          throw new Error("Failed to create token");
     }
};

// Verificar un token
export const verifyToken = (token : string) => {
     try {
          return jwt.verify(token, secretKey);
     } catch (error) {
          console.error("Error verifying token:", error);
          throw new Error("Invalid or expired token");
     }
};

// Decodificar un token
export const decodeToken = (token : string) => {
     try {
          return jwt.decode(token, { complete: true });
     } catch (error) {
          console.error("Error decoding token:", error);
          throw new Error("Failed to decode token");
     }
};