
const filtersReducerDefaultState = {
  category: []
};
  
  export default (state = filtersReducerDefaultState, action) => {
    const { type, payload, products } = action;

    switch (type) {
        case 'SET_FILTERED_PRODUCTS':
          return {
            ...state,
            category: action.category
          };
        case 'CLEAR_FILTERS':
          return {
            ...state,
            category: []
          };
      default:
        return state;
    }
  };