import {ProductStore} from './stores/ProductStore';
import {BasketStore} from './stores/BasketStore';
import RootStore from './stores/index'

const rootStore = new RootStore();
const productStore = new ProductStore(rootStore);
const basketStore = new BasketStore(rootStore);

const useStore = () => ({productStore, basketStore});

export default useStore;