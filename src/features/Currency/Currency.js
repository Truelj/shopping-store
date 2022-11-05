import React from "react";

export function Currency(props){
    const ulStyle={
        listStyleType: "none",
        display: "flex",
        alignItems: "center"
    };
    
    const currencyChangeHandler=(e)=>{
        //change currency
        console.log(e.target.value);
        const currency = e.target.value;
        props.changeCurrency(currency);
    }
    return (
        <nav>
            <ul style={ulStyle}>
                <li key='USED'><button value='USD' onClick={currencyChangeHandler}> USD</button></li>
                <li key='EUR'><button value='EUR' onClick={currencyChangeHandler}> EUR</button></li>
                <li key='CAD'><button value='CAD' onClick={currencyChangeHandler}> CAD</button></li>
            </ul>
        </nav>
    );
}