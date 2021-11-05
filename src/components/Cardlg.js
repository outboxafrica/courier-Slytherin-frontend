import React, { useContext, useState, useEffect } from 'react'
import allstar from '../images/customchuck70.png'
import { FiHeart } from "react-icons/fi"

import { AppContext } from '../context/AppContext'

const Cardlg = (props) => {

    const { productData } = props
    const { checkProdInCart, addToCart, removeFromCart } = useContext(AppContext)

    const TrimString = (stringLength, string) => { 
        return string.length>stringLength?string.substring(0, stringLength - 3)+"....":string
    }

    const addProd = () => {
        addToCart(productData.id, 1)
    }

    const removeProd = () => {
        removeFromCart(productData.id)
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
                {checkProdInCart(productData.id)?
                    <span onClick={removeProd}>Remove From Cart</span>
                :
                    <span onClick={addProd}>Add to cart</span>
                }
            </div>
        </div>
    )
}

export default Cardlg
