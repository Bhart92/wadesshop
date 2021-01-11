import { GET_PRODUCTS, GET_CATEGORIES } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
    case GET_CATEGORIES:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}