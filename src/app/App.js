
import { useEffect, useState } from 'react';
import { Cart } from '../features/Cart/Cart';
import { Currency } from '../features/Currency/Currency';
import { Inventory } from '../features/Inventory/Inventory';
import './App.css';
import { inventoryData, currenciesData} from '../data';
import { addItem, loadData, updateQuantity,changeCurrency } from './store';

function App({state, dispatch}) {  
  //load inventory
  useEffect(()=>{
    console.log("App: loading inventory data....")
    dispatch(loadData(inventoryData));
  },[]);
  

  const addItemToCart = (itemObject)=>{
    dispatch(addItem(itemObject.name, itemObject.price));
    
  }
  const updateQuantityInCart = (name, quantity)=>{
    dispatch(updateQuantity(name,quantity));
  };
  
  
  const changeCurrency = (currency) =>{
    dispatch(changeCurrency(currency));
  }


  return (
    <div className="App" >
      <div className='Currency'>
        <Currency currenciesData={currenciesData} changeCurrency={changeCurrency}></Currency>
      </div>
      <div className='Inventory'>
        <Inventory inventory={state.inventory} addItemToCart={addItemToCart} currencyFilter={state.currency}></Inventory>
      </div>
        <Cart cartObject={state.cart} updateQuantityInCart={updateQuantityInCart} currencyFilter={state.currency}></Cart>
      
    </div>
  );
}

export default App;
