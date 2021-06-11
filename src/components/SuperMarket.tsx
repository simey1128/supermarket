import React, {useState} from 'react';
import '../css/SuperMarket.css';
import ProductList from './ProductList';
import BasketList from './BasketList'
import {v4 as uuidv4} from 'uuid'

import useStore from '../useStore'


const SuperMarket = () => {
    const {productStore} = useStore();
    const [newProduct, setnewProduct] = useState({
        id:uuidv4(),
        name: '',
        price: 0,
        choice:0,
    })
    return(

        <div className="whole">
        <div className="SuperMarket">

            <div className="items-wrapper">
                <h2>판매상품</h2>
                <ProductList />
            </div>
            <div className="basket-wrapper">
                <h2>장바구니</h2>
                <BasketList />

            </div>
            
                
            </div>
        <div className="AddProduct">
                <div className="name-wrapper">
                <h4>상품명</h4>
                <input className="input" type="text" onChange={(event)=>{
                    setnewProduct({
                        id: uuidv4(),
                        name: event.target.value,
                        price: newProduct.price,
                        choice: 0
                    })
                }}/>
                </div>
                <div className="name-wrapper">
                <h4>상품가격</h4>
                <input className="input" type="text" onChange={(event)=>{
                    setnewProduct({
                        id: uuidv4(),
                        name: newProduct.name,
                        price:parseInt(event.target.value),
                        choice: 0
                    })
                }}/>
                </div>
                <div className='add' onClick={()=>{
                    productStore.addProduct(newProduct)}}>
                <h4 >추가</h4>
                </div>
                
                
            </div>
        </div>
            
           
        
         

    )
}

export default SuperMarket;