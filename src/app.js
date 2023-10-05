import express from 'express'
import morgan from 'morgan'
import cookieParser from "cookie-parser";
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'
import noteRoutes from './routes/notes.routes.js'

const server = express ()

server.use(cors({
    origin: 'http://localhost:5173'
}));
server.use(morgan('dev'))
server.use(express.json());
server.use(cookieParser());

server.use('/api' , authRoutes)
server.use('/api',  noteRoutes)

export default server;