import ExpressServer from './server/expressServer.js';
import { setupExpress } from './server/setupExpress.js';
import mongoose from 'mongoose';
import config from './config/config.js';
const HOST: string = config.host || 'localhost';
const PORT: number = Number(config.port) || 3000;
const uriMongo: string = config.uriLocalMongo || '';

const server = new ExpressServer(HOST, PORT);
const app = server.getExpress();
setupExpress(app);

mongoose.connect(uriMongo)
    .then(() => {
        console.log("✅ Connected to MongoDB");
        app.listen();
    })
    .catch(error => {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    });
/*
try {
    app.listen();
} catch (e) {
    console.log(e);
    process.exit(1);
}*/