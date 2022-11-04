
import { useState } from 'react';
import { Cart } from '../features/Cart/Cart';
import { Inventory } from '../features/Inventory/Inventory';
import { Total } from '../features/Total/Total';
import './App.css';

function App() {  
  const [cartObject, setCartObject] = useState(null);
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
  

  return (
    <div className="App" style={{backgroundColor: "pink"}}>
      <div className='Inventory'>
        <Inventory addToCart={addToCart}></Inventory>
      </div>
      <div className='Cart' style={{backgroundColor:"purple"}}>
        {showCart && <Cart cartObject={cartObject} updateCart={updateCart} ></Cart>}
      </div>
      <div className='Total' style={{backgroundColor:"grey"}}>
        <Total cartObject={cartObject}></Total>
      </div>
    </div>
  );
}

export default App;
