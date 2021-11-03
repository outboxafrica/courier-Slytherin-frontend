import React from "react";
import "../Styles/pages/ProductDetails.css";
import product from "../assets/productdets.jpg";
import { FaChevronCircleLeft } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="pdleft">
        <div className="cntdShopp">
          <div className="cntdShoppingIcon">
            <FaChevronCircleLeft />
          </div>
          <p className="cntdShoppingTitle">Continue Shopping</p>
        </div>
        <img className="pdProductImg" src={product} alt="product" />
      </div>
      <div className="pdright">
        <Right />
      </div>
    </div>
  );
};

const Right = () => {
  return (
    <div className="pdleftComp">
      <h1 className="pdLeftTitle">Lorem Ipsum</h1>
      <div className="pdLeftSect">
        <h1 className="pdleftPrice">UGX2500</h1>
        <div className="pdLeftaddProduct">- 1 +</div>
      </div>
      <div className="pdleftDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis
        enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
      </div>
      <div className="pdLeftSectBottom">
        <div className="pdBottomRating">
          <AiFillHeart />
          <AiFillHeart />
          <AiFillHeart />
          <AiFillHeart />
        </div>
        <button className="pdaddToCartbtn">Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductDetails;
