import app from './app'
import logger from './util/logger'
import { APP_PORT } from './config/settings'

const server = app.listen()

export default server
