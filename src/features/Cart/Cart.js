import React from "react";

export function Cart(props){
    const cartObject = props.cartObject; 

    //extract item names into array
    const cartArray = Object.keys(cartObject);

    const quantityOnChangeHandler = (itemName, quantity) =>{
        console.log(`name: ${itemName}, quantity: ${quantity}`);
        props.updateCart(itemName, quantity);
    }

    //style  
    const ulStyle ={
        listStyleType: "none",
        display: "inline-block"
    }
    const liStyle ={
   
    }
    return (
        <div>
            <h1>Cart</h1>

            <ul style={ulStyle}>{cartArray.map((itemName)=>{
                return <li style={liStyle}>
                    <h3>{itemName}</h3> 
                    {/*<h3>quantity: {cartObject[itemName].quantity} </h3>*/}
                    <select name={itemName} onChange={(e)=>{quantityOnChangeHandler(itemName, e.target.value)}}>
                        <option value="1" >1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    
                </li>
            })}</ul>
            
            <h2></h2>
        </div>
    )
}