// Setup de express
import express from 'express';
import cookieParser from 'cookie-parser'; // Para manejar cookies
import passport from 'passport'; // Autenticación
import { initializePassport } from '../config/passport.config.js';

export function setupExpress(app: express.Express): void {
    // Middlewares
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());

    // Passport
    initializePassport();
    app.use(passport.initialize());

}
