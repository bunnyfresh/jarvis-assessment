import app from './app'
import logger from './util/logger'
import { APP_PORT } from './config/settings'

const server = app.listen(process.env.PORT || APP_PORT, (): void => {
  logger.info(
    `App is running at http://localhost:${
      process.env.PORT || APP_PORT
    } in ${app.get('env')} mode`,
  )
})

export default server
