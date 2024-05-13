import start from './server.js'
import ManegeDB from '../src/database/ManegeDB.js'

ManegeDB.conectar()

start()