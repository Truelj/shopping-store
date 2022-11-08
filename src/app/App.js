
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
  const loadData=()=>{
    const dataUSD = inventoryData;
    //convert data to align with the current currency
    switch(currency) {   
        case 'EUR':
            const dataEUR = dataUSD.map((item)=>{
                return {...item, price: (item.price * 1).toFixed(2)}
            });
            //dataEUR.forEach((data)=>{console.log(`€${data.price}`)});
            setInventory(dataEUR);
            break;
        case 'CAD':
            const dataCAD = dataUSD.map((item)=>{
                return {...item, price: (item.price * 1.35).toFixed(2)}
            });
            //dataCAD.forEach((data)=>{console.log(`$${data.price}`)});
            setInventory(dataCAD);
            break;
        default:
            //dataUSD.forEach((data)=>{console.log(`$${data.price}`)});
            setInventory(dataUSD);      
    }
    
  };//end of loadData
  useEffect(()=>{
    console.log("App: loading inventory data....")
    loadData();
    
  }, [currency]);
  
  useEffect(()=>{
    //check inventory update
    console.log("App: check inventory update....")
    inventory.forEach((item)=>{console.log(`${currency}${item.price}`)});
    updatePriceInCart(inventory);
}, [inventory]);


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
  
  
  const updatePriceInCart = (newInventory) =>{
    if(cartObject !== null){
      //update Cart because the price has been changed with the changed currency
      console.log("App: updating cart..."); 
      setCartObject((prev)=>{
        for(const itemName in prev){
          const inventoryItem = newInventory.filter((item)=>{return item.name === itemName})[0];
          prev[itemName].price = inventoryItem.price;
          console.log(itemName + "/new price : " + prev[itemName].price);
        }
        return prev;
      });
    }

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
        <Inventory inventory={inventory} addItemToCart={addItemToCart} currency={currency} updatePriceInCart={updatePriceInCart} ></Inventory>
      </div>
      <div className='cart-container'>
        {showCart && <Cart cartObject={cartObject} updateQuantityInCart={updateQuantityInCart} ></Cart>}
        <Total cartObject={cartObject} currency={currency}></Total>
      </div>
      
    </div>
  );
}

export default App;
