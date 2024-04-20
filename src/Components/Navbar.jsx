import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">JG</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : location.pathname !== '/3D_Portfolio_website/' ? "text-black" : "text-white"
          }
        >
            About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : location.pathname !== '/3D_Portfolio_website/' ? "text-black" : "text-white"
          }
        >
            Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
