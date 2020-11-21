import { get } from 'lodash'

export const ModalState = state => get(state, 'search.modal')
