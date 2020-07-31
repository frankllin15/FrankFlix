import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './menu.css'
import Button from '../Button/index'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt='FrankFlix Logo'></img>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu