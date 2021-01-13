// SET_SHIRT_FILTER
export const setFilteredProducts = (category = []) => ({
    type: 'SET_FILTERED_PRODUCTS',
    category
  });

  export const clearFilters = () => ({
    type: 'CLEAR_FILTERS'
  })


