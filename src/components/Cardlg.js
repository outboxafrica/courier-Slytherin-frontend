import React from 'react'
import allstar from '../images/customchuck70.png'
import { FiHeart } from "react-icons/fi";

const Cardlg = (props) => {

    const { productData } = props

    const TrimString = (stringLength, string) => { 
        return string.length>stringLength?string.substring(0, stringLength - 3)+"....":string
    }

    const addToCart = () => {
        console.log('You clicked me')
    }

    return (
        <div className="cardLarge">
            <div style={{ width: '100%', padding: '0px 20px' }} align="left">
                <p style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px #C4C4C4 solid', padding: '10px 8px 10px 12px' }}><FiHeart/></p>
            </div>
            <div className="imgLg" style={{ height: '298px', overflow: 'hidden'  }}>
                <img src={productData.image} style={{ width: '60%' }} alt="" />
            </div>
            <div className="productnameLg" style={{ padding: '5px 10px' }}>
                <h3>{TrimString(50, productData.title)}</h3>
            </div>
            <div className="priceLg">
                <h2><small>UGX</small>{productData.price}</h2>
                <span onClick={addToCart}>Add to cart</span>
            </div>
        </div>
    )
}

export default Cardlg
