import React from "react";

export function Currency({currenciesData, changeCurrency}){
    
    const onClickHandler=(currency)=>{
        //change currency
        console.log("Currency: change currency to " + currency);
        changeCurrency(currency);
    }
    return (
        <div id='currency-filters-container'>
            <h3>Choose a currency</h3>
            {currenciesData.map((currency)=>(createCurrencyButton(currency)))}
        </div>
        
        
    );
    function createCurrencyButton(currency){
        return (
            <button 
                className='currency-button'
                key={currency}
                onClick={()=> onClickHandler(currency)}   
            >
              {currency}  
            </button>
        )
    }
}