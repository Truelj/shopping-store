import React, { useEffect, useState } from "react";
import sampleImage from './img/inventory1.png';

export function Inventory(props){
    
    const [inventory, setInventory] = useState([]);

    //load inventory
    const loadData = ()=>{
        //fetch data resource
        // mock data
        const data= [
            { name: 'Hat', img: '', price: 15.99 },
            { name: 'T-Shirt', img: '', price: 18.99 },
            { name: 'Hoodie', img: '', price: 49.99 },
        ]
        setInventory(data);
    }
    useEffect(()=>{
        loadData();
    }, []);
    
    const addToCart = (e) =>{
        //console.log(e.target.value);
        const name = e.target.value;
        const price = inventory.filter((item)=>(item.name === name))[0].price;
        console.log({
            name: name,
            price: price
        })
        props.addToCart({
            name: name,
            price: price
        });
        
    }
    //styles
    const ulStyle ={
        listStyleType: "none",
        display: "inline-block"
    }
    const liStyle ={
        display: "inline-block",
        marginLeft: 20,
        marginRight: 20
    }
    const buttonStyle ={
        border: "none",
        backgroundColor: "white"
    }

    return (
        <div>
            <h1>Inventory</h1>
            <ul style={ulStyle} >
                {inventory.map((item)=>{ return <li style={liStyle}>
                    <img src={sampleImage} style={{width:200}}></img>
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <button name="name" value={item.name} onClick={addToCart} style={buttonStyle}>add to cart</button>
                </li>})}
            </ul>

        </div>
    )
}