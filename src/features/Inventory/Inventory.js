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
    
    const onClickHandler = (e) =>{
        //console.log(e.target.value);
        const name = e.target.value;
        const price = inventory.filter((item)=>(item.name === name))[0].price;
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
    //styles
    const ulStyle ={
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
    }
    const liStyle ={
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
    const buttonStyle ={
        border: "none",
        backgroundColor: "white"
    }
    
    
   
    return (
        <div>
            <h1>Inventory</h1>
            <ul style={ulStyle} >
                {inventory.map((item)=>{ return <li key={item.name} style={liStyle}>
                    <img src={sampleImage} style={{width:200}}></img>
                    <div className='description'>
                        <h3>{item.name}</h3>
                        <h3>{`${currencySymbol} ${item.price}`}</h3>
                        <button name="name" value={item.name} onClick={onClickHandler} style={buttonStyle}>add to cart</button>
                    </div>
                </li>})}
            </ul>

        </div>
    )
}