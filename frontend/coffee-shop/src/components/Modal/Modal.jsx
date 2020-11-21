import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ModalState } from '../../redux/selectors'
import { showModalAction } from '../../redux/actions'

import './Modal.scss'

const Modal = props => {
  const dispatch = useDispatch()
  const stateModal = useSelector(state => ModalState(state))

  useEffect(() => {}, [stateModal])

  const handleCloseClick = () => {
    dispatch(showModalAction(false))
  }

  return (
    <>
      {stateModal && (
        <div className='Modal-form'>
          <div className='Modal'>
            <form className='form'>
              <h3>{props.titulo}</h3>
              <div className='input-group'>
                <i className='icon-user color'></i>
                <input type='email' required placeholder={props.nombre} />
              </div>
              <div className='input-group'>
                <i className='icon-key color'></i>
                <input type='current-password' required className='form-control' placeholder={props.password} />
              </div>
              <button className='btn-sing-in'>Sing up</button>
            </form>
            <button className='Modal-close' onClick={handleCloseClick}></button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
