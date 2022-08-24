import type { Manifest } from 'webextension-polyfill-ts'
import pkg from '../package.json'
import { IS_DEV, PORT } from '../scripts/utils'

export async function getManifest(): Promise<Manifest.WebExtensionManifest> {
  // update this file to update this manifest.json
  // can also be conditional based on your need
  const manifest: Manifest.WebExtensionManifest = {
    manifest_version: 3,
    name: pkg.displayName || pkg.name,
    version: pkg.version,
    description: pkg.description,
    action: {
      default_icon: './assets/icon-512.png',
      default_popup: './popup/index.html',
    },
    options_ui: {
      page: './options/index.html',
      open_in_tab: true,
    },
    background: {
      service_worker: 'background.js',
    },
    content_scripts: [
      {
        matches: ['http://*/*', 'https://*/*'],
        js: ['./content/index.global.js'],
      },
    ],
    icons: {
      16: './assets/icon-512.png',
      48: './assets/icon-512.png',
      128: './assets/icon-512.png',
    },
    permissions: [
      'tabs',
      'storage',
      'activeTab',
    ],
  }

  if (IS_DEV) {
    // if dev set manifest to version 2
    manifest.manifest_version = 2

    // convert popup extension to manifest v2
    delete manifest.action

    manifest.browser_action = {
      default_icon: './assets/icon-512.png',
      default_popup: './popup/index.html',
    }

    // convert background to manifest v2
    delete manifest.background
    manifest.background = ['background.js']

    // this is required on dev for Vite script to load
    manifest.content_security_policy = `script-src-elem \'self\' http://localhost:${PORT}; object-src \'self\'`
  }

  return manifest
}
