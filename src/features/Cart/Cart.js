import React from "react";

export function Cart({cartObject, updateQuantityInCart}){
    //extract item names into array
    const cartArray = Object.keys(cartObject);

    const quantityOnChangeHandler = (itemName, quantity) =>{
        console.log("Cart: update quantity in cart...");
        console.log(`name: ${itemName}, quantity: ${quantity}`);
        updateQuantityInCart(itemName, quantity);
    }

    //style  
 
    return (
        <div>
            <ul className="cart-items">
                {cartArray.map((name)=>{return createCartItem(name)})}
            </ul>
            
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