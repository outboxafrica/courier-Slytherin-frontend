import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    getProducts();
  }, []);

  const getProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
    setIsLoaded(true);
  };

  const checkProdInCart = (prodId) => {
    return cart.some(function (prod) {
      return prod.productId === prodId;
    });
  };

  const addToCart = (productID, productQty, productPrice) => {
    setCart((cart) => [
      ...cart,
      { productId: productID, quantity: productQty, price: productPrice },
    ]);
  };

  const removeFromCart = (productID) => {
    setCart(cart.filter((prod) => prod.productId !== productID));
  };

  const removeFromCartPage = (productID) => {
         setCart(cart.filter((prod) => prod.productId !== productID));
        console.log(cart)
  }

  

  return (
    <AppContext.Provider
      value={{
        isLoaded,
        products,
        cart,
        checkProdInCart,
        addToCart,
        removeFromCart,
        removeFromCartPage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
