import { legacy_createStore } from "redux";

//move states from App.js to here
const initialState = {
    inventory: [],
    cart: {},
    currency: 'USD'
}

//declare action creators
export const loadData = (inventoryData) =>{
     return {
        type: 'inventory/loadData',
        payload: inventoryData
     }
};

export const addItem = (itemName, itemPrice) =>{
    return {
        type: 'cart/addItem',
        payload: {itemName, itemPrice}
    }
}
export const updateQuantity = (name, quantity) =>{
    return {
        type: 'cart/updateQuantity',
        payload: {name, quantity}
    }
}
export const changeCurrency = (currency) =>{
    return {
        type: 'currency/changeCurrency',
        payload: currency
    }
}
export const reducer = (state = initialState, action)=>{
    switch (action.type){
        case 'inventory/loadData':
            return {...state, inventory: action.payload};
        case 'cart/addItem':
            const {itemName, itemPrice} = action.payload;
            return {...state,
                cart:{...state.cart, [itemName]: {price: itemPrice, quantity: 1}}};
        case 'cart/updateQuantity':
            const {name, quantity} = action.payload;
            const cart = state.cart;
            const newCart = {
                ...cart, 
                [name]:{...cart[name], quantity: quantity}
            }
            return {...state, cart: newCart};
        case 'currency/changeCurrency':
            return {...state, currency: action.payload};
        default:
            return state;
    }
}


