import  React, { useContext } from "react";
import Banner from "../components/Banner";
import ServicesSection from "../components/ServicesSection";
import NewsLetter from "../components/NewsLetter";
import "../Styles/pages/Home.css";
import { AppContext } from "../Contexts/AppContext";
import Cardlg from '../components/Cardlg';

const Home = () => {
  const {products} = useContext(AppContext)

  return (
    <div className="home">
      <Banner />
      <NewArrivals product={products} />
      <h2 className="homeSectTitle">Our Service Makes Life Easier</h2>
      <ServicesSection />
      <PopularProducts product={products} />
      <NewsLetter />
    </div>
  );
};

export default Home;

const NewArrivals = ({product}) => {
     
  return (
    <div className="newArrivals">
        <p>New Arrivals</p>
          <div className="newArrivalsContainer">
            {product.slice(0,3).map((product) => 
            <Cardlg productData={product} key={product.id} />
            )}
          </div>
    </div>
  )
}

const PopularProducts = ({product}) => {
  return(
    <div className="newArrivals">
    <p>Popular Products</p>
      <div className="popularContainer">
        {product.slice(14,17).map((product) => 
        <Cardlg productData={product} key={product.id} />
        )}
      </div>
</div>
  )
}