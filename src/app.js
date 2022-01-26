import Server from './server.js'
import ManegeDB from '../src/database/ManegeDB.js'

ManegeDB.conectar()

const server = new Server


server.start()