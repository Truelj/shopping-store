import React from "react";

export function Total(props){
    const cartObject = props.cartObject;
    
    //get total
    let total = 0;
    for(const item in cartObject){
        total += cartObject[item].quantity * cartObject[item].price;
    }
    
    return (
        <div>
            Total: {total.toFixed(2)} 
        </div>
    )
};