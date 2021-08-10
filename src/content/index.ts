/* eslint-disable no-console */
import { onMessage } from 'webext-bridge'

console.info('[vitesse-modernized-chrome-ext] Hello world from content script')

// communication example: send previous tab title from background page
onMessage('tab-prev', ({ data }) => {
  console.log(`[vitesse-modernized-chrome-ext] Navigate from page "${data.title}"`)
})
