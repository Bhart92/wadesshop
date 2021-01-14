import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import products from '../../reducers/products';
import store from '../../store'
import { GetAllCategories } from '../../actions/shopify';
import { setFilteredProducts, clearFilters} from '../../actions/filters';
// import PropTypes from 'prop-types';

const FilterBar = ({products, GetAllCategories, setFilteredProducts, clearFilters}) => {
    console.log(products)
    const handleClick = async (e) => {
        const array = await products.data.filter((item) => item.categories[0].name === e.target.value);
        setFilteredProducts(e.target.value);
    };
    useEffect(() => {
        GetAllCategories();
    })
    return (
        <div className='product--filter-bar'>
        <h2>Filter</h2>
        <div><span onClick={() => clearFilters()}>Clear Filter</span></div>
        <div className='filter-bar--clothes'>
            <h3>Clothes</h3>
            <ul>
                <li><span>></span><input onClick={(e) => {
                    handleClick(e)
                    }} type="radio" name="filters" value="T Shirt" /><label htmlFor="T Shirt">&nbsp;Shirts</label>
                    </li>
                <li><span>></span><input onClick={(e) => {
                    handleClick(e)
                    }} type="radio" name="filters" value="Pants" /><label htmlFor="Pants">&nbsp;Pants</label></li>
                <li><span>></span><input onClick={(e) => {
                    handleClick(e)
                    }}type="radio" name="filters" value="Accessories" /><label htmlFor="Accessories">&nbsp;Hats</label></li>
            </ul>
        </div>
        {/* <div className='filter-bar--jewlery'>
        <h3>jewlery</h3>
        <ul>
                <li onClick={(e) => {
                    handleClick(e)
                    }}><span>></span><input type="radio" name="filters" value="Necklaces" /><label htmlFor="Necklaces">&nbsp;Necklaces</label>
                    </li>
                <li onClick={(e) => {
                    handleClick(e)
                    }}><span>></span><input type="radio" name="filters" value="Rings" /><label htmlFor="Rings">&nbsp;Rings</label></li>
                <li onClick={(e) => {
                    handleClick(e)
                    }}><span>></span><input type="radio" name="filters" value="Watches" /><label htmlFor="Watches">&nbsp;Watches</label></li>
            </ul>
        </div> */}
</div>
    )
};

FilterBar.propTypes = {
    setFilteredProducts: PropTypes.func.isRequired,
    clearFilters: PropTypes.func.isRequired,
    GetAllCategories: PropTypes.func.isRequired

  };

const mapStateToProps = state => ({
    products: state.products,
    filters: state.filters
  });

export default connect(mapStateToProps, {setFilteredProducts, GetAllCategories, clearFilters})(FilterBar);