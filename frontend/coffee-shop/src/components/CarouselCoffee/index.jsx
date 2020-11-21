import React from 'react'
import './CarouselCoffee.scss'

const CarouselCoffee = () => {
  return (
    <section className='Home'>
      <div className='Home-about'>
        <h2>Nuestro café</h2>
        <p>
          Desde 1971, siempre ha sido y siempre será de la mejor calidad. Nos apasiona la labor de abastecernos de los mejores granos de café arábicos siguiendo estrictos principios éticos y tostarlos
          con el máximo cuidado. Nuestro café, nuestra pasión, sólo es comparable al placer de compartirlo.
        </p>
        <div className='Home-button_wrap'>
          <a href='/' title='Más información'>
            Más información
          </a>
        </div>
      </div>
    </section>
  )
}

export default CarouselCoffee
