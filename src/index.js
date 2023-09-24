import server from './app.js'
import { connectDB } from './db.js'

connectDB ();

server.listen(3000)
console.log('Server on port', 3000)