import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from './routes/auth.js';
import podcastsRoutes from './routes/podcast.js';
import userRoutes from './routes/user.js';

dotenv.config();

const app = express();

/** Middlewares */

app.use(express.json());

const corsConfig = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-CSRF-Token"
    ],
};

app.use(cors(corsConfig));

const port = process.env.PORT || 8700;

const connect = () => {
    mongoose.set('strictQuery', true);

    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log('MongoDB connected');
        })
        .catch((err) => {
            console.log('MongoDB connection error:', err);
        });
};

/** Routes */

app.use("/api/auth", authRoutes);
app.use("/api/podcasts", podcastsRoutes);
app.use("/api/user", userRoutes);

/** Error handler */

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    return res.status(status).json({
        success: false,
        status,
        message
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    connect();
});
