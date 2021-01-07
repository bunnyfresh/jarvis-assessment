import app from './app'
import logger from './util/logger'
import { APP_PORT } from './config/settings'

const server = app.listen(APP_PORT, '81.17.137.76', (): void => {
  logger.info(
    `App is running at http://localhost:${server.address()} in ${app.get(
      'env',
    )} mode`,
  )
})

export default server
