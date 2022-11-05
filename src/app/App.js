
import { useState } from 'react';
import { Cart } from '../features/Cart/Cart';
import { Currency } from '../features/Currency/Currency';
import { Inventory } from '../features/Inventory/Inventory';
import { Total } from '../features/Total/Total';
import './App.css';

function App() {  
  const [inventory, setInventory] = useState([]);
  const [cartObject, setCartObject] = useState(null);
  const [currency, setCurrency] = useState('USD');

  const showCart = cartObject === null? false:true;
  const addToCart = (itemObject)=>{
    setCartObject((prev)=>{
      return {...prev, [itemObject.name]: {price: itemObject.price, quantity: 1}}
    });
    
  }
  const updateCart = (name, quantity)=>{
    //update cartObject;
    setCartObject((prev) => {
      return {...prev, 
        [name]: {"price": prev[name].price, "quantity": quantity}};
    })
  };
   
  const changeCurrency = (currency) =>{
    setCurrency(currency);
  }

  const updateInvetory = (newInventory) =>{
    setInventory(newInventory);
    //update Cart because the price has been changed with the changed currency
    console.log("updating cart...");
    setCartObject((prev)=>{
      for(const itemName in prev){
        const inventoryItem = newInventory.filter((item)=>{return item.name === itemName})[0];
        prev[itemName].price = inventoryItem.price;
        console.log(itemName + "/new price : " + prev[itemName].price);
      }
      return prev;
    })
  }



  return (
    <div className="App" style={{backgroundColor: "beige"}}>
      <div className='Currency' style={{backgroundColor:"rebeccapurple"}}>
        <Currency changeCurrency={changeCurrency}></Currency>
      </div>
      <div className='Inventory'>
        <Inventory addToCart={addToCart} currency={currency} updateInvetory={updateInvetory} ></Inventory>
      </div>
      <div className='Cart' style={{backgroundColor:"grey"}}>
        {showCart && <Cart cartObject={cartObject} updateCart={updateCart} ></Cart>}
      </div>
      <div className='Total' style={{backgroundColor:"rebeccapurple"}}>
        <Total cartObject={cartObject} currency={currency}></Total>
      </div>
    </div>
  );
}

export default App;
