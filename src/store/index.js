// store.js
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'manageGlobalState',
  state: () => ({
    name: 'sww',
    tagsList: []
  }),
  actions: {
    delTagsItem(data) {
      if (this.tagsList.length === 1) {
        return
      }
      this.tagsList.splice(data.index, 1)
    },
    setTagsItem(data) {
      this.tagsList.push(data)
    },
    clearTags() {
      if (this.tagsList.length === 1) {
        return
      }
      this.tagsList = []
    },
    closeTagsOther(data) {
      this.tagsList = data
    }
    // closeCurrentTag(state, data) {
    //   for (let i = 0, len = state.tagsList.length; i < len; i++) {
    //     const item = state.tagsList[i]
    //     if (item.path === data.$route.fullPath) {
    //       if (i < len - 1) {
    //         data
    //           .$router
    //           .push(state.tagsList[i + 1].path)
    //       } else if (i > 0) {
    //         data
    //           .$router
    //           .push(state.tagsList[i - 1].path)
    //       } else {
    //         data
    //           .$router
    //           .push('/')
    //       }
    //       state
    //         .tagsList
    //         .splice(i, 1)
    //       break
    //     }
    //   }
    // }
  }
})