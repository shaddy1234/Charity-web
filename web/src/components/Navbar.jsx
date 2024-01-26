import React from 'react'
import './styles.css'

function Navbar() {
  return (
    <div>
        <nav>
        <img src="./logo.png" alt="logo" />
            <ul>
                
                <li><a href="#">About</a></li>
                <li><a href="#">Our Work</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#"><button>DONATE</button></a></li>
        </ul>
        </nav>
        
    </div>
  )
}

export default Navbar
