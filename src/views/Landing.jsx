import React from 'react'
import header from '../assets/headerArca.jpg'
import header2 from '../assets/header2Arca.jpg'
import espanol from '../assets/spanishArca.jpg'
import ingles from '../assets/englishArca.jpg'
import footer from '../assets/footerArca.jpg'
import footer2 from '../assets/footer2Arca.jpg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' bg-black h-fit overflow-hidden'>
      <img src={header} />
      <img src={header2} />
      <div className=' flex flex-col'>
        <button className=' bg-black'>
          <NavLink to={'/spanish'}>
            <img src={espanol} />
          </NavLink>
        </button>
        <button>
          <NavLink to={'/english'}>
            <img src={ingles} />
          </NavLink>
        </button>
      </div>
      <img src={footer} className=' bottom-0' />
      <img src={footer2} className=' bottom-0' />
    </div>
  )
}

export default Home