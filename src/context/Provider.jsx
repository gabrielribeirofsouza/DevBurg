import React, { useState } from "react";
import propTypes from 'prop-types'
import appContext from "./AppContext";
function Provider({ children }){
    const [cartItems, setCartItems] = useState([])
    const [cartVisible, setCartVisible] = useState(false)
    const value = {
        cartItems, setCartItems,
        cartVisible, setCartVisible
    }
    return(
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    )
}
export default Provider

Provider.propTypes = {
    children: propTypes.any}.isRequired;
