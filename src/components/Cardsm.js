import React from 'react'
import allstar from "../images/customchuck70.png";


function Cardsm() {
    return (
      <div className="cardSmall">
        <div className="imgSm">
          <img src={allstar} width={100} alt="" />
        </div>
        <div className="productDetailsm">
          <h3 style={{ color: "#7C7C7C" }}>Custom Chuck 70</h3>
          <h2 style={{ marginTop: "10px", color: "#EE9F8B" }}>
            UGX2500 <span style={{color:"#000000"}}>x01</span>
          </h2>
        </div>
      </div>
    );
}

export default Cardsm
