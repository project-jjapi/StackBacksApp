import { SHOW_MODAL } from '../types'

const initialState = {
  favorites: [],
  modal: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: state.modal ? (state.modal = false) : (state.modal = true),
      }

    default:
      return { ...state }
  }
}
