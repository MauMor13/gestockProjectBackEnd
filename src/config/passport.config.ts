// Importación de módulos necesarios
import passport from "passport"; // Framework de autenticación
import jwt from "passport-jwt"; // Estrategia JWT para Passport
import type { Request } from "express"; // Tipos de Express
import { secretKey } from "../utils/tokenConfig.js"; // Clave secreta para firmar y verificar tokens

// Extracción de componentes de passport-jwt
const JwtStrategy = jwt.Strategy; // Estrategia JWT
const ExtractJwt = jwt.ExtractJwt; // Métodos para extraer el token JWT de la solicitud

interface JwtPayload {
    id: string;
}
/**
 * Función para inicializar y configurar Passport con la estrategia JWT.
 * Esta función configura cómo se extrae el token JWT y cómo se verifica.
 */
export const initializePassport = () => {
    /**
     * Extractor de cookies personalizado.
     * Extrae el token JWT de una cookie llamada "cookie".
     */
    const cookiesExtractor = (req: Request): string | null => {
        let token = null;
        if (req && req.cookies && req.cookies["cookie"]) {
            token = req.cookies["cookie"];
        }
        return token;
    };

    /**
     * Configuración de la estrategia JWT en Passport.
     * - jwtFromRequest: Especifica cómo extraer el token JWT (en este caso, desde una cookie).
     * - secretOrKey: Clave secreta para verificar la firma del token.
     * - Callback de verificación: Procesa el token decodificado.
     */
    passport.use(
        "jwt", // Nombre de la estrategia
        new JwtStrategy(
            {
                jwtFromRequest: ExtractJwt.fromExtractors([cookiesExtractor]), // Extrae el token de la cookie
                secretOrKey: secretKey, // Clave secreta para verificar el token
            },
            /**
             * Callback de verificación del token JWT.
             */
            async (dataToken: JwtPayload, done: (error: any, user?: any)=> void) => {
                try {
                    // Verifica si el token contiene la información necesaria
                    if (!dataToken || !dataToken.id) {
                        throw new Error("Token inválido o falta información");
                    }
                    return done(null, dataToken); // Autenticación exitosa
                } catch (error) {
                    console.error(error); // Depuración: muestra el error
                    return done(error, false); // Autenticación fallida
                }
            }
        )
    );
};