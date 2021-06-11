import React from 'react';
import {observer} from 'mobx-react';
import useStore from '../useStore';
import {Product} from '../stores/ProductStore'
import '../css/Product.css';

const ProductItem = observer(({data}:{data: Product})=>{
    const product: Product = data;
    const {basketStore} = useStore();

    const onClick = (event:React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        basketStore.updateItem(data);
    }
    return(
        <div className="ProductItem" onClick={onClick}>
            <h2>{product.name}</h2>
            <h4>{product.price}</h4>
        </div>
    )
})
export default ProductItem;