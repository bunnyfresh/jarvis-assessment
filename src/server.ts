import app from './app'
import logger from './util/logger'
import { APP_PORT } from './config/settings'

const server = app.listen(APP_PORT, '81.17.137.76')

export default server
