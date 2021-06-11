import {makeObservable, action, observable, computed, toJS} from 'mobx';
import {Product, ProductStore} from './ProductStore'
import RootStore from './index';


export class BasketStore{
    constructor(rootStore: RootStore){
        this.productStore = rootStore.productStore;
        makeObservable(this,{
            itemList: observable,
            updateItem: action,
            removeItem: action,
            setTotalPrice: action,
            totalPrice: observable,
            getItems: computed,
            getTotalPrice: computed,
            returnItem: action,
        })
        
    }
    productStore: ProductStore;
    itemList: Product[] = [];
    totalPrice: number = 0;
    


    updateItem(item: Product){
        const found = this.getItems.findIndex(el=>el.id === item.id);

        if(found>=0){
            this.itemList[found].choice = this.itemList[found].choice + 1;
        }
        else{
            this.itemList = [...this.itemList, item];
        }
        this.setTotalPrice();
        
    }

    removeItem(id: string){
        const idx = this.itemList.findIndex(el=>el.id===id)
        this.itemList.splice(idx,1);
        this.setTotalPrice();
    }

    setTotalPrice(){
        this.totalPrice = this.itemList.reduce((acc: number, current: Product)=>{
            return acc + (current.price * current.choice);
        },0)
        
    }

    returnItem(id: string){
        this.itemList = this.itemList.map((item)=>{
            if(item.id === id){
                item.choice = item.choice -1;
            }
            return item;
        })
        this.setTotalPrice();
    }

    get getItems(){
        return toJS(this.itemList);
    }

    get getTotalPrice(){
        return toJS(this.totalPrice);
    }

}