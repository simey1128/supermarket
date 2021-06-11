import React from 'react';
import {observer} from 'mobx-react';
import useStore from '../useStore';
import ProductItem from './ProductItem'
import '../css/Product.css'
import {v4 as uuidv4} from 'uuid'


import { GiCancel } from 'react-icons/gi';

const ProductList = observer(()=>{
    const {productStore, basketStore} = useStore();
    const products = productStore.getProducts;
    return(
        <div className="ProductContainer">
            {
                products.map((product,idx)=>{
                    return(
                        <div className="ItemContainer">
                        <ProductItem data={product} key={uuidv4()}/>
                        <GiCancel color={'grey'} size={20} style={{position:'relative', left:342, top:-59}} onClick={(value:any)=>{
                            
                            productStore.removeProduct(product.id);
                            basketStore.removeItem(product.id);
                        }}/>
                        </div>
                    )
                })
            }
        </div>
    )
})



export default ProductList;

