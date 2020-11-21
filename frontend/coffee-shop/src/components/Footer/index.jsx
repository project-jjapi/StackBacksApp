import React from 'react'

import './Footer.scss'

export const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='Footer-container'>
        <div className='Footer-menu'>
          <h2>STARBUCKS</h2>
          <p>Nuestra empresa</p>
          <p>Nuestra herencia</p>
          <p>Boletines de prensa</p>
          <p>Trabaja con nosotros</p>
        </div>
        <div className='Footer-menu'>
          <h2>STARBUCKS REWARDS</h2>
          <p>Starbucks Rewards</p>
          <p>Mi Cuenta</p>
          <p>Más Información</p>
        </div>
        <div className='Footer-menu'>
          <h2>SERVICIO AL CLIENTE</h2>
          <p>Contáctanos</p>
          <p>Preguntas frecuentes sobre el menú</p>
          <p>Facturas electrónicas</p>
        </div>
        <div className='Footer-menu'>
          <h2>VÍNCULOS RÁPIDOS</h2>
          <p>Información nutricional</p>
          <p>Buscador de tiendas</p>
          <p>Términos y condiciones</p>
          <p>Lista de tiendas con Drive Thru</p>
          <p>Lista de tiendas Delivery</p>
        </div>
      </div>
      <div className='Footer-list'>
        <ul>
          <li>Accesibilidad web</li>
          <li>Aviso de Privacidad</li>
          <li>Condiciones de uso</li>
          <li>Politicas del Sitio Web</li>
          <li>Mapa del sitio</li>
          <li>Preferencias sobre cookies</li>
        </ul>
      </div>
      <p className='copyright'>© 2020 Starbucks Coffee Company. Reservados todos los derechos.</p>
      <p className='byismael'>
        Hecho con <span className='icon-heart color'></span> by IsmaelJDz7
      </p>
    </footer>
  )
}

export default Footer
