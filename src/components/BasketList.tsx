import React from 'react';

import {observer} from 'mobx-react';
import useStore from '../useStore';
import BasketItem from './BasketItem';
import {v4 as uuidv4} from 'uuid'

import '../css/Basket.css'
const BasketList = observer(()=>{
    const {basketStore} = useStore();
    const items = basketStore.getItems;
    const totalPrice = basketStore.getTotalPrice;
    return(
        <div className="BasketContainer">
            {
                items.map((item, idx)=>{
                    if(!item.choice) return null;
                    else return <BasketItem data={item} key={uuidv4()}/>
                    
                })
            }
            {
                
                <div className="totalPrice">
                        <h4 className="title">총합</h4>
                        <h4>{`${totalPrice} 원`}</h4>
                    </div>
            }
        </div>
    )
});

export default BasketList;