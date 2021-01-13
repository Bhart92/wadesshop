import { combineReducers } from 'redux';
import alert from './alert';
import products from './products';
import filters from './filters';

export default combineReducers({
    alert,
    products,
    filters  
});