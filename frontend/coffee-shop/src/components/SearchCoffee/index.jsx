import React from 'react'

import './SearchCoffee.scss'
import coffeeHome from '../../img/heartCoffee.png'

const SearchCoffee = () => {
  return (
    <section className='Search'>
      <div className='Search-information'>
        <h2>BUSCADOR DE CAFÉ</h2>
        <p>Nuestros maestros cafeteros han destilado años de conocimientos sobre sabores en tres sencillas preguntas para ayudarle a encontrar ese café que de seguro le encantará.</p>
        <div className='Search-firstSteps'>
          <a href='/'>Primeros pasos>></a>
        </div>
        <div className='Search-coffees'>
          <a href='/'>Examina todos los cafés>></a>
        </div>
      </div>
      <div className='Search-image'>
        <img src={coffeeHome} alt='coffee' className='image' />
      </div>
    </section>
  )
}

export default SearchCoffee
