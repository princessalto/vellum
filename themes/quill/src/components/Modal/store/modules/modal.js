export const state = () => ({
  modal: {
    modal: false,
    persistent: false,
    action: true,
    cancel: true,
    discard: true,
    icon: null,
    iconColor: 'primary--text',
    alignedCenter: false,
    actionColor: null,
    cancelColor: null,
    discardColor: null,
    actionText: 'Okay',
    cancelText: 'Cancel',
    discardText: null,
    actionCallback: null,
    discardCallback: null,
    cancelCallback () {
      this.model = false
    }
  }
})

export const getters = {
  modal: state => state.modal
}

export const mutations = {
  PROMPT_DIALOG (state, payload) {
    payload = Object.assign(state.modal, payload)
    state.modal = payload
  },

  emptyState () {
    this.replaceState({
      modal: null
    })
  }
}

export const modal = {
  namespaced: true,
  state,
  getters,
  mutations
}
