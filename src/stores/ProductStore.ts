import {makeObservable, action,observable,computed, toJS} from 'mobx';
import RootStore from './index';
import {BasketStore} from './BasketStore'
import {v4 as uuidv4} from 'uuid';

export interface Product{
    id: string;
    name: string;
    price: number;
    choice: number;
}
export class ProductStore{
    
    constructor(rootStore: RootStore){
        this.basketStore = rootStore.basketStore;
        makeObservable(this,{
            productList: observable,
            addProduct: action,
            removeProduct: action,
            getProducts: computed,
            numProducts: computed,
        })
        
    }
    basketStore: BasketStore;
    productList: Product[] = [{id:uuidv4(), name:'새우깡', price:2500, choice:1},
{id:uuidv4(), name:'초코볼', price:1400, choice:1},
{id:uuidv4(), name:'허니버터칩', price:1600, choice:1}];

    addProduct(newproduct: Product){
        this.productList = [...this.productList, newproduct]
  
    }

    removeProduct(id: string){
        const idx = this.productList.findIndex(el=>{
            return el.id===id
        })
        this.productList.splice(idx, 1);


    }
    
    get getProducts(){

        return toJS(this.productList)
    }

    get numProducts(){
        return toJS(this.productList.length)
    }
}