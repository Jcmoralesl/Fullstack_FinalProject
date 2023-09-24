import express from 'express'
import morgan from 'morgan'

import authRoutes from './routes/auth.routes.js'

const server = express ()

server.use(morgan('dev'))
server.use(express.json()),

server.use('/api' , authRoutes)

export default server;