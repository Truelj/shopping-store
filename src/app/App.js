
import { useEffect, useState } from 'react';
import { Cart } from '../features/Cart/Cart';
import { Currency } from '../features/Currency/Currency';
import { Inventory } from '../features/Inventory/Inventory';
import { Total } from '../features/Total/Total';
import './App.css';
import { inventoryData, currenciesData} from '../data';

function App() {  
  const [inventory, setInventory] = useState([]);
  const [cartObject, setCartObject] = useState(null);
  const [currency, setCurrency] = useState('USD');

  //load inventory
  useEffect(()=>{
    console.log("App: loading inventory data....")
    setInventory(inventoryData);
  },[]);
  
  const showCart = cartObject === null? false:true;

  const addItemToCart = (itemObject)=>{
    setCartObject((prev)=>{
      return {...prev, [itemObject.name]: {price: itemObject.price, quantity: 1}}
    });
    
  }
  const updateQuantityInCart = (name, quantity)=>{
    //update cartObject;
    setCartObject((prev) => {
      return {...prev, 
        [name]: {"price": prev[name].price, "quantity": quantity}};
    })
  };
  
  
  const changeCurrency = (currency) =>{
    setCurrency(currency);
  }


  return (
    <div className="App" >
      <div className='Currency'>
        <Currency currenciesData={currenciesData} changeCurrency={changeCurrency}></Currency>
      </div>
      <div className='Inventory'>
        <Inventory inventory={inventory} addItemToCart={addItemToCart} currencyFilter={currency}></Inventory>
      </div>
      <div className='cart-container'>
        {showCart && <Cart cartObject={cartObject} updateQuantityInCart={updateQuantityInCart} ></Cart>}
        <Total cartObject={cartObject} currencyFilter={currency}></Total>
      </div>
      
    </div>
  );
}

export default App;
