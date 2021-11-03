import React from 'react'
import allstar from '../images/customchuck70.png'
import { FiHeart } from "react-icons/fi";

function Cardlg() {
    return (
        <div className="cardLarge">
            <div className="iconLg">
                <FiHeart/>
            </div>
            <div className="imgLg">
                <img src={allstar} width={320} alt="" />
            </div>
            <div className="productnameLg">
                <h3>Custom Chuck 70</h3>
            </div>
            <div className="priceLg">
                <h2>UGX2500</h2>
                <span>Add to cart</span>
            </div>
        </div>
    )
}

export default Cardlg
