import React from 'react'
import './Options.css'
import Cart from '../../../images/icon-cart.svg'
import Profile from '../../../images/image-avatar.png'

export default props =>
    <div className='options'>
        <div className='options-item cart'>
            <img src={Cart} alt="cart" />
        </div> 
        <div className='options-item profile'>
            <img src={Profile} alt="profile" />
        </div>
    </div>