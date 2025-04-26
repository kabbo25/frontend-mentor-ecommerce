import './App.css'
import iconMentu from './assets/images/icon-menu.svg'
import iconCart from './assets/images/icon-cart.svg'
import avatar from './assets/images/image-avatar.png'
import crossIcon from './assets/images/icon-close.svg'
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setIsMenuOpen(true)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className={'bg-white h-screen'}>
      <div className={'border-amber-300 border-0 m-6 h-[4rem] flex flex-row justify-between '}>
          <div className={'flex items-start'}>
              <img
                src={iconMentu}
                alt="icon-menu"
                height={24}
                width={30}
                className={'cursor-pointer'}
                onClick={handleMenuOpen}
              />
              <span className={'text-3xl -m-2 font-bold ml-3.5'}>Sneakers</span>
          </div>
          <div className={'flex items-start'}>
              <img src={iconCart} alt="icon-menu" width={30}/>
              <img src={avatar} alt="avatar" width={30} className={'ml-5'}/>
          </div>
      </div>

      {/* Overlay with fade animation */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 z-40 ${
          isMenuOpen ? 'opacity-75' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleMenuClose}
      />

      {/* Navigation menu with slide animation */}
      <div
        className={`bg-gray-50 fixed h-screen w-[70%] top-0 left-0 px-6 py-6 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <img
          src={crossIcon}
          alt={'crossIcon'}
          width={24}
          className={'cursor-pointer'}
          onClick={handleMenuClose}
        />
        <div className={'flex flex-col mt-20 text-xl gap-y-4 font-bold'}>
          <a href="#" className={'cursor-pointer'}>Collections</a>
          <a href="#" className={'cursor-pointer'}>Men</a>
          <a href="#" className={'cursor-pointer'}>Woman</a>
          <a href="#" className={'cursor-pointer'}>About</a>
          <a href="#" className={'cursor-pointer'}>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default App
