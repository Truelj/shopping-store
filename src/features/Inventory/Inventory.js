import React, { useEffect, useState } from "react";
import { calculatePrice, getCurrencySymbol } from "../../utilities/utilities";
import sampleImage from './img/inventory1.png';

export function Inventory({inventory, addItemToCart, currencyFilter }){
    
    const onClickHandler = (inventoryItem) =>{
        const name = inventoryItem.name;
        const price = inventoryItem.price;
        addItemToCart({
            name: name,
            price: price
        });
        
    };
    
    const currencySymbol = getCurrencySymbol(currencyFilter);
   
    return (
            <ul id='inventory-container' >
                {inventory.map((inventoryItem)=>{ return createInventoryItem(inventoryItem);})}
            </ul>
    )
    function createInventoryItem(inventoryItem){
        const {name, price, img} = inventoryItem;
        const displayedPrice = calculatePrice(price, currencyFilter);
        return (
                <li key={name} className='inventory-item' >
                    <img src={inventoryItem.img}></img>
                    <h3>{name}</h3>
                    <h3 className="price" >{`${currencySymbol} ${displayedPrice} ${currencyFilter}`}</h3>
                    <button className="add-to-cart-button" value={inventoryItem} onClick={()=>(onClickHandler(inventoryItem))} >add to cart</button>
                </li>
        )
    }
        
}