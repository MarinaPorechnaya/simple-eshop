//import _products from './products.json';
//import _items from './catalog.json';
import _categories from './categories.json';
import _products from './products.json';

const TIMEOUT = 100

export default {
    //getItems: (cb: any, timeout: number) => setTimeout(() => cb(_items), timeout || TIMEOUT),
    getProducts: (cb: any, timeout: number) => setTimeout(() => cb(_products), timeout || TIMEOUT),
    // @ts-ignore
    getCategories: (cb: any, timeout: number) => setTimeout(() => cb(_categories), timeout || TIMEOUT),
    buyProducts: (payload: any, cb: any, timeout: number) => setTimeout(() => cb(), timeout || TIMEOUT)
}
