import React, { Component } from 'react'
import './ProductDisplay.css'
import Image1 from '../../../../images/image-product-1.jpg'
import Image2 from '../../../../images/image-product-2.jpg'
import Image3 from '../../../../images/image-product-3.jpg'
import Image4 from '../../../../images/image-product-4.jpg'

export default class Calculator extends Component {
    state = {
        currentPicture: 1
    }

    resolvePicture(e) {
        let pictureId = e.target.getAttribute('pictureId')
        this.setState({ currentPicture: pictureId })
    }

    render() {
        return (
            <div className='product-display'>
                <div className='main-image'>
                    <img src={Image1} alt="Product" />
                </div>
                <div className='image-array'>
                    <div className='image-container'>
                        <img src={Image1} alt="Product" />
                        <div className='overlay'></div>
                    </div>
                    <div className='image-container'>
                        <img src={Image2} alt="Product" />
                        <div className='overlay'></div>
                    </div>
                    <div className='image-container'>
                        <img src={Image3} alt="Product" />
                        <div className='overlay'></div>
                    </div>
                    <div className='image-container'>
                        <img src={Image4} alt="Product" />
                        <div className='overlay'></div>
                    </div>
                </div>
                {/* rever esse comportamento acima
                possívelmente posso passar a função para o objeto */}
            </div>
        )
    }

}
