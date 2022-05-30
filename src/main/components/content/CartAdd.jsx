import React, { Component } from 'react'
import './CartAdd.css'

export default class Calculator extends Component {

    render() {
        return (
            <div className='cart-adder'>
                <div className='amount-selector'>
                    <button className='amount-btn'>
                        <div className='overlay'></div>
                        -
                    </button>
                    <div className='amount'>
                        0
                    </div>
                    <button className='amount-btn'>
                        <div className='overlay'></div>
                        +
                    </button>
                </div>
                <button className='add-to-cart'>
                    <div className='overlay'></div>
                    Add to cart
                </button>
            </div>
        )
    }
}