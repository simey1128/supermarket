import {BasketStore} from './BasketStore';
import {ProductStore} from './ProductStore';


class RootStore{
    constructor(){
        this.basketStore = new BasketStore(this);
        this.productStore = new ProductStore(this);
    }
    basketStore: BasketStore;
    productStore: ProductStore;

}

export default RootStore;