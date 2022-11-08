import React from "react";
import { calculatePrice, getCurrencySymbol } from "../../utilities/utilities";

export function Total({cartObject, currencyFilter}){
    let currencySymbol = getCurrencySymbol(currencyFilter)
    //get total in dollars
    let total = 0;
    for(const item in cartObject){
        //calculate the displayed price 
        total += cartObject[item].quantity * cartObject[item].price;
    }
    
    return (
        <h3 className="total">Total{"  "}
            <span className="total-value">{`${currencySymbol}${(calculatePrice(total, currencyFilter))}${currencyFilter}`}</span> 
        </h3>
        
    )
};