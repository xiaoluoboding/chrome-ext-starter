<template>
  <main class="w-[300px] px-4 py-5 text-center text-gray-700 dark:text-gray-200">
    <img src="/assets/icon.svg" class="icon-btn mx-2 text-2xl" />
    <div>Popup</div>
    <p class="mt-2 opacity-50">
      {{ $t('popup.desc') }}
    </p>
    <button class="btn mt-2" @click="openOptionsPage">
      {{ $t('popup.open_options') }}
    </button>

    <Footer />

    <div class="mt-2">
      <span class="opacity-50">{{ $t('popup.storage') }}:</span> {{ storageDemo }}
    </div>
  </main>
</template>

<script setup lang="ts">
import { storageDemo } from '~/logic/storage'

function openOptionsPage() {
  chrome.runtime.openOptionsPage()
}
</script>
