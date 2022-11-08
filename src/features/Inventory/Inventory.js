import React, { useEffect, useState } from "react";
import sampleImage from './img/inventory1.png';

export function Inventory({inventory, addItemToCart, currency }){
    
    const onClickHandler = (inventoryItem) =>{
        const name = inventoryItem.name;
        const price = inventoryItem.price;
        addItemToCart({
            name: name,
            price: price
        });
        
    };
    
    let currencySymbol;
    switch (currency){
        case 'CAD':
            currencySymbol = '$';
            break;
        case 'EUR':
            currencySymbol = '€';
            break;
        default:
            currencySymbol = '$'
    }
 
   
    return (
            <ul id='inventory-container' >
                {inventory.map((inventoryItem)=>{ return createInventoryItem(inventoryItem);})}
            </ul>
    )
    function createInventoryItem(inventoryItem){
        const {name, price, img} = inventoryItem;
        const displayedPrice = calculatePrice(price, currency);
        return (
                <li key={name} className='inventory-item' >
                    <img src={inventoryItem.img}></img>
                    <h3>{name}</h3>
                    <h3 className="price" >{`${currencySymbol} ${displayedPrice} ${currency}`}</h3>
                    <button className="add-to-cart-button" value={inventoryItem} onClick={()=>(onClickHandler(inventoryItem))} >add to cart</button>
                </li>
        )
    }
    function calculatePrice(price, currency){
        switch(currency) {   
            case 'EUR':
                return (price * 1).toFixed(2);
            case 'CAD':
                return (price * 1.35).toFixed(2);
            default:
                return price.toFixed(2);    
        }
    }
        
}