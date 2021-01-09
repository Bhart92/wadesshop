import axios from 'axios';
import { setAlert } from './alert';
import store from '../store';
import {
    GET_PRODUCTS
} from '../actions/types';

// console.log(store)
// Get all products
export const GetAllProducts = () => async dispatch => {

    try {
        const res = await axios.get('/api/store');
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
          });
    } catch (err) {
        
    }
};

