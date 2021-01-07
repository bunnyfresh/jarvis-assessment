import app from './app'
import logger from './util/logger'
import { APP_PORT } from './config/settings'

const server = app.listen(APP_PORT, 'https://jarvis-assessment.herokuapp.com')

export default server
