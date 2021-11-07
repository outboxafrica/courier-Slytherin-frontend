
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const [isLoaded, setIsLoaded] = useState(false)
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        setIsLoaded(false)
        getProducts()
    }, [])

    const getProducts = async () => {
        await fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((json) => setProducts(json));
        setIsLoaded(true)
    }

    const addToCart = (productID, productQty) => {
        setCart(cart => [...cart, {productId:productID,quantity:productQty}])
    }

    const removeFromCart = (productID) => {
        setCart(cart.filter((prod) => prod.id !== productID));
    };

    return (
        <AppContext.Provider
            value={{
                isLoaded,
                products,
                cart,
                addToCart,
                removeFromCart
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
