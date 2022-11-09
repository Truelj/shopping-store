//tests for using store
import { inventoryData, currenciesData} from '../data';
import {loadData, reducer, addItem, updateQuantity, changeCurrency} from './store.js';
import React from 'react';
import { legacy_createStore } from 'redux';

export default function(){
    //dispatch some events
    //create the store
    const store = legacy_createStore(reducer);

    //test dispatchers
    console.log('testing on dispatchers...')

    store.dispatch(loadData(inventoryData));
    console.log(store.getState().inventory.length);
    
    const inventoryItem = inventoryData[0];
    store.dispatch(addItem(inventoryItem.name, inventoryItem.price));
    console.log(Object.keys(store.getState().cart));
    
    store.dispatch(updateQuantity(inventoryItem.name, 3));
    console.log(store.getState().cart[inventoryItem.name].quantity);
    
    store.dispatch(changeCurrency('EUR'));
    console.log(store.getState().currency);
    
    return (
        <div></div>
    )
}
