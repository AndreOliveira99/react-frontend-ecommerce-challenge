import React from 'react'
import './Header.css'
import Logo from './Logo'
import Nav from './Nav'
import Options from './Options'

export default props => 
    <header className='header'>
        <Logo/>
        <Nav/>
        <Options/>
    </header>