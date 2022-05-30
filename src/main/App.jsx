import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/content/Main'

export default props =>
    <div className='app'>
        <Header />
        <Main />
    </div>