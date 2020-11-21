import { createPortal } from 'react-dom'

const ModalContainer = props => {
  return createPortal(props.children, document.getElementById('modal-container'))
}

export default ModalContainer
