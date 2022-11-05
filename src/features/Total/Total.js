import React from "react";

export function Total(props){
    const cartObject = props.cartObject;
    let currencySymbol;
    switch (props.currency){
        case 'CAD':
            currencySymbol = '$';
            break;
        case 'EUR':
            currencySymbol = '€';
            break;
        default:
            currencySymbol = '$'
    }
    //get total
    let total = 0;
    for(const item in cartObject){
        total += cartObject[item].quantity * cartObject[item].price;
    }
    
    return (
        <div>
            Total: {`${currencySymbol}${total.toFixed(2)}`} 
        </div>
    )
};