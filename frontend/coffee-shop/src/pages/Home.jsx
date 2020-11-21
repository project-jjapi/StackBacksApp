import React from 'react'

import CarouselCoffee from '../components/CarouselCoffee'
import SearchCoffee from '../components/SearchCoffee'
import AboutCoffee from '../components/AboutCoffee'
import Social from '../components/Social'
import ModalContainer from '../components/Modal'
import Modal from '../components/Modal/Modal'

const Home = () => {
  return (
    <main>
      <CarouselCoffee />
      <SearchCoffee />
      <AboutCoffee />
      <Social />
      <ModalContainer>
        <Modal nombre='Nombre' password='password' titulo='Iniciar sesión' />
      </ModalContainer>
    </main>
  )
}

export default Home
