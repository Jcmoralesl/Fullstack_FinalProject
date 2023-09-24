import server from './app.js'
import { connectDB } from './db.js'

connectDB ();

server.listen(4000)
console.log('Server on port', 4000)