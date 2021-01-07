import app from './app'
import logger from './util/logger'

const server = app.listen(3000,, '0.0.0.0', (): void => {
  logger.info(
    `App is running at http://localhost:${server.address()} in ${app.get(
      'env',
    )} mode`,
  )
})

export default server
