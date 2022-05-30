import React from 'react'
import './ProductDescription.css'
import CartAdd from '../CartAdd'

function getDiscount(offer, price) {
    let discount = (Number(offer) / Number(price)) * 100
    return discount
}

export default props =>
    <div className='product-text-container'>
        <h2 className='company-name'>{props.company}</h2>
        <h1 className='product-title'>{props.title}</h1>
        <h3 className='product-description'>{props.description}</h3>
        <h1 className='offer'>{'$' + `${props.offer}`}
        </h1>
        <span className='discount'>
                {`${getDiscount(props.offer, props.price)}` + '%'}</span>
        <h3 className='price'>{'$' + `${props.price}`}</h3>
        <CartAdd />
    </div>