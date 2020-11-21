import React from 'react'
import { useDispatch } from 'react-redux'

import { showModalAction } from '../../redux/actions'

import LogoCoffeeShop from '../../img/cover.png'

import './Header.scss'

export const Header = () => {
  const dispatch = useDispatch()

  const showModal = () => {
    dispatch(showModalAction(true))
  }

  return (
    <header className='Header'>
      <figure>
        <img src={LogoCoffeeShop} width='180px' alt='logo' />
      </figure>
      <nav className='Header-menu'>
        <ul>
          <li>Inicio</li>
          <li>Menú</li>
          <li>Tiendas</li>
          <li>Conócenos</li>
        </ul>
      </nav>
      <div className='Header-user'>
        <button className='Header-button' onClick={() => showModal()}>
          Iniciar sesión
        </button>
      </div>
    </header>
  )
}

export default Header
