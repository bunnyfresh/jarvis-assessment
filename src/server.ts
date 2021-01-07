import app from './app'
import logger from './util/logger'

const server = app.listen(80, (): void => {
  logger.info(
    `App is running at http://localhost:${app.get('port') || 80} in ${app.get(
      'env',
    )} mode`,
  )
})

export default server
