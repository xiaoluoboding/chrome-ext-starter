import { resolve } from 'path'
import fs from 'fs-extra'
import { logger } from './utils'

;(async() => {
  try {
    await fs.move(
      resolve('extension/dist/background/index.global.js'),
      resolve('extension/background.js'),
      { overwrite: true },
    )
    await fs.remove(resolve('extension/dist/background'))
    // eslint-disable-next-line no-console
    logger('BUILD:SW', 'Moved service-worker success!')
  }
  catch (err) {
    console.error(err)
  }
})()
