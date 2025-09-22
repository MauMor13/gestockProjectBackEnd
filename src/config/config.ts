import dotenv from 'dotenv'; // Para manejar variables de entorno

dotenv.config();

export default {
    port: process.env.PORT,
    uriMongo: process.env.URIMONGO,
    uriLocalMongo: process.env.URILOCALMONGO,
    jwtSecretKey: process.env.SECRET_KEY,
    host: process.env.HOST,
    factory:{
        persistence: process.env.PERSISTENCE
    }
}