import React from 'react';
import {observer} from 'mobx-react';
import useStore from '../useStore';
import {Product} from '../stores/ProductStore';
import {v4 as uuidv4} from 'uuid'

const BasketItem = observer(({data}:{data: Product})=>{
    const {id, name, price, choice}: Product = data;
    const {basketStore} = useStore();

    return(
        <div className="BasketItem">
            <div className="name">
                <h4>{name}</h4>
            </div>
            <div className="price">
                <h4>{`${price}원`}</h4>
            </div>
            <div className="number">
                <h4>{choice}</h4>
            </div>
            <div className="return" onClick={()=>{basketStore.returnItem(id)}}>
                <h4>갖다놓기</h4>
            </div>
            
        </div>
    )
});

export default BasketItem;