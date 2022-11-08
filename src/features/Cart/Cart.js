import React from "react";
import { calculatePrice,getCurrencySymbol, getTotalPrice } from "../../utilities/utilities";

export function Cart({cartObject, updateQuantityInCart,currencyFilter}){
    //extract item names into array
    const cartArray = Object.keys(cartObject);

    const quantityOnChangeHandler = (itemName, quantity) =>{
        console.log("Cart: update quantity in cart...");
        console.log(`name: ${itemName}, quantity: ${quantity}`);
        updateQuantityInCart(itemName, quantity);
    }

    //get total in dollars
    const total = getTotalPrice(cartObject);
    const currencySymbol = getCurrencySymbol(currencyFilter);
    return (
        <div className='cart-container'>
            <ul className="cart-items">
                {cartArray.map((name)=>{return createCartItem(name)})}
            </ul>
            <h3 className="total">Total{"  "}
            <span className="total-value">{`${currencySymbol}${(calculatePrice(total, currencyFilter))}${currencyFilter}`}</span> 
        </h3>
            
        </div>
    );

    function createCartItem(name){
        return (
            <li key={name} >
                <p>{name}</p> 
                {/*<h3>quantity: {cartObject[itemName].quantity} </h3>*/}
                <select 
                    className="item-quantity"
                    name={name} 
                    onChange={(e)=>{quantityOnChangeHandler(name, e.target.value)}}>
                    <option value="1" >1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>   
            </li>
        );
    }
    
}