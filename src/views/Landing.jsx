import React from 'react'
import header from '../assets/headerArca.jpeg'
import header2 from '../assets/header2Arca.jpeg'
import espanol from '../assets/spanishArca.jpeg'
import ingles from '../assets/englishArca.jpeg'
import footer from '../assets/footerArca.jpeg'
import footer2 from '../assets/footer2Arca.jpeg'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' bg-black h-fit overflow-hidden'>
      <img src={header} />
      <img src={header2} />
      <div className=' flex flex-col'>
        <button className=' bg-black'>
          <NavLink to={'/spanish'}>.
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
      <button>
        <NavLink to={'https://www.instagram.com/arcatulum/'}>
          <img src={footer2} className=' bottom-0' />
        </NavLink>
      </button>
    </div>
  )
}

export default Home