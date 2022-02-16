// store.js
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'manageGlobalState',
  state: () => ({
    name: 'sww'
  })
})