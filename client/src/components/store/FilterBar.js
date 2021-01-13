import React from 'react';
import { connect } from 'react-redux';
import products from '../../reducers/products';
import store from '../../store'
import { setFilteredProducts} from '../../actions/filters';
// import PropTypes from 'prop-types';

const FilterBar = ({products, setFilteredProducts}) => {
    
    const handleClick =(e) => {
        // store.dispatch(setTextFilter(e.target.value));
        // console.log(products.data.filter((item) => item.categories[0].name === e.target.value))
        // store.dispatch(setFilteredData(products.data.filter((item) => item.categories[0].name === e.target.value)))
    };
    return (
        <div className='product--filter-bar'>
            <h2>Filter</h2>
            <div className='filter-bar--clothes'>
                <h3>Clothes</h3>
                <ul>
                    <li onClick={(e) => {
                        handleClick(e)
                        }}><span>></span><input type="radio" name="filters" value="T Shirt" /><label htmlFor="T Shirt">&nbsp;Shirts</label>
                        </li>
                    <li onClick={(e) => {
                        handleClick(e)
                        }}><span>></span><input type="radio" name="filters" value="Pants" /><label htmlFor="Pants">&nbsp;Pants</label></li>
                    <li onClick={(e) => {
                        handleClick(e)
                        }}><span>></span><input type="radio" name="filters" value="Accessories" /><label htmlFor="Accessories">&nbsp;Accessories</label></li>
                </ul>
            </div>
            <div className='filter-bar--jewlery'>
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
            </div>
    </div>
    )
};

const mapStateToProps = state => ({
    products: state.products,
    filters: state.filters
  });

export default connect(mapStateToProps, {setFilteredProducts})(FilterBar);