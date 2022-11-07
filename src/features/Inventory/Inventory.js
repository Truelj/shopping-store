import React, { useEffect, useState } from "react";
import sampleImage from './img/inventory1.png';

export function Inventory({addItemToCart, currency, updatePriceInCart }){
    
    const [inventory, setInventory] = useState([]);
    //load inventory
    const loadData = ()=>{
        //fetch data resource
        // mock data
        const dataUSD = [
            { name: 'Hat', img: '', price: 15.99 },
            { name: 'T-Shirt', img: '', price: 18.99 },
            { name: 'Hoodie', img: '', price: 49.99 },
        ]
        //convert currency
        switch(currency) {   
            case 'EUR':
                const dataEUR = dataUSD.map((item)=>{
                    return {...item, price: (item.price * 1).toFixed(2)}
                });
                //dataEUR.forEach((data)=>{console.log(`€${data.price}`)});
                setInventory(dataEUR);
                break;
            case 'CAD':
                const dataCAD = dataUSD.map((item)=>{
                    return {...item, price: (item.price * 1.35).toFixed(2)}
                });
                //dataCAD.forEach((data)=>{console.log(`$${data.price}`)});
                setInventory(dataCAD);
                break;
            default:
                //dataUSD.forEach((data)=>{console.log(`$${data.price}`)});
                setInventory(dataUSD);      
        }
        
    };//end of loadData

    useEffect(()=>{
        loadData();
    }, [currency]);
    
    useEffect(()=>{
        //check inventory update
        console.log("Inventory: check inventory update....")
        inventory.forEach((item)=>{console.log(`${currency}${item.price}`)});
        //send the up-to-dated inventory to app.js
        updatePriceInCart(inventory);
    }, [inventory]);
    
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
        const {name, img, price} = inventoryItem;
        return (
                <li key={name} className='inventory-item' >
                    <img src={sampleImage}></img>
                    <h3>{name}</h3>
                    <h3 className="price" >{`${currencySymbol} ${price}`}</h3>
                    <button class="add-to-cart-button" value={inventoryItem} onClick={onClickHandler} >add to cart</button>
                </li>
        )
    }
}