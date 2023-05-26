import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Content() {
  return(
    <div>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="Nike" />
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}

export default Content;
