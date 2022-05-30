import React from 'react'
import './Main.css'
import ProductDisplay from './product-display/ProductDisplay'
import ProductDescription from './product-description/ProductDescription'

export default props =>
    <main className='main-content'>
        <ProductDisplay />
        <ProductDescription company='sneaker company'
            title='fall limited edition sneakers'
            description='These low-profile sneakers are your perfect casual 
            wear companion. Featuring a durable rubber outer sole, they’ll 
            withstand everything the weather can offer.'
            price='250.00' offer='125.00'/>
    </main>

// A classe produto, deve receber as propriedades e montar a tela
// Propriedades ex: Imagens, título, descrição, etc....