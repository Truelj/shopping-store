import React from "react";

export function Total({cartObject, currency}){
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
    //get total in dollars
    let total = 0;
    for(const item in cartObject){
        //calculate the displayed price 
        total += cartObject[item].quantity * cartObject[item].price;
    }
    
    return (
        
        <h3 className="total">Total{"  "}
            <span className="total-value">{`${currencySymbol}${(calculatePrice(total, currency))}${currency}`}</span> 
        </h3>
        
    )
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
};