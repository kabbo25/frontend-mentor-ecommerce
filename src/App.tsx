import './App.css'
import { useState } from 'react'
import iconMentu from './assets/images/icon-menu.svg'
import iconCart from './assets/images/icon-cart.svg'
import avatar from './assets/images/image-avatar.png'
import crossIcon from './assets/images/icon-close.svg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact']

  return (
    <div className="bg-white h-screen">
      <div className="mx-6 md:my-6 md:max-w-[1110px] md:mx-auto h-16 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <img
            src={iconMentu}
            alt="menu"
            className="w-8 h-6 cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen(true)}
          />
          <span className="text-3xl font-bold">Sneakers</span>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-gray-500">
            {navLinks.map(link => (
              <a key={link} href="#" className="hover:text-gray-800 transition-colors">{link}</a>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <img src={iconCart} alt="cart" className="w-8 cursor-pointer"/>
          <img src={avatar} alt="avatar" className="w-8 cursor-pointer hover:border-2 hover:border-orange-500 rounded-full transition-all"/>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 z-40 md:hidden ${
          isMenuOpen ? 'opacity-75' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile navigation menu */}
      <div
        className={`bg-gray-50 fixed h-screen w-2/3 top-0 left-0 p-6 z-50 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <img
          src={crossIcon}
          alt="close"
          className="w-6 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        />
        <div className="flex flex-col mt-20 text-xl gap-y-4 font-bold">
          {navLinks.map(link => (
            <a key={link} href="#" className="cursor-pointer">{link}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App