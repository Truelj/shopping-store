import React from "react";
const currencyData = ['USD', 'EUR', 'CAD'];

export function Currency({changeCurrency}){
    
    const onClickHandler=(currency)=>{
        //change currency
        console.log("Currency: change currency to " + currency);
        changeCurrency(currency);
    }
    return (
        <div id='currency-filters-container'>
            <h3>Choose a currency</h3>
            <nav>
            {currencyData.map((currency)=>(createCurrencyButton(currency)))}
            </nav>
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