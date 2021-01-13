import { Redirect } from 'react-router-dom';

export default (products, { category }) => {

    const {data } = products;
    if(data === undefined){
        return <Redirect to='/' />;
    }
    return products.data.filter((item) => {
      const catMatch = item.categories[0].name.includes(category);
        // console.log(item.categories[0].name.toLowerCase());
        // console.log(catMatch);

      return catMatch;
    })
  };