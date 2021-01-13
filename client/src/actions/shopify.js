import axios from 'axios';
// import { setAlert } from './alert';
import {
    GET_PRODUCTS
} from '../actions/types';

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

// // Get All 
// export const GetCategories = () => async dispatch => {
//     try {
//         const res = await axios.get('/api/store/categories');
//         console.log(res)
//         dispatch({
//             type: GET_CATEGORIES,
//             payload: res.data
//           });
//     } catch (err) {
        
//     }
// };

