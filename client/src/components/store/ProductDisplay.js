import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FilterBar from './FilterBar';
import Spinner from '../layout/Spinner';
import { GetAllProducts } from '../../actions/shopify';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import usePagination from "../pagination/Pagination";
// import filterProducts from "../filter/filter";
import store from '../../store.js';
import { setFilteredProducts, clearFilters} from '../../actions/filters';
import filterSelector from '../../selectors/filterSelector';


import {
    GET_PRODUCTS
} from '../../actions/types';



const ProductDisplay = ({GetAllProducts, setFilteredProducts, clearFilters, products, filters}) => {
    useEffect(() => {
        if(products.length === 0) GetAllProducts();
        clearFilters();
    }, [clearFilters]);

    const PER_PAGE = 8;
    let [page, setPage] = useState(1);


    const filtered = filterSelector(products, filters)
    console.log(filtered)

    const _DATA = usePagination(!products.data ? products.data = [] : filtered, PER_PAGE);
    // console.log(products);

    if(!products){
        return <Redirect to='/' />;
    }
    const count = Math.ceil(products.data.length / PER_PAGE);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    const handleClick = async (e) => {
        const array = await products.data.filter((item) => item.categories[0].name === e.target.value);
        setFilteredProducts(e.target.value);
    };
    return (
        <Fragment>
            <div className='product-container'>
                {/* <Fragment><FilterBar /></Fragment> */}
                <div className='product--filter-bar'>
            <h2>Filter</h2>
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
                        }}type="radio" name="filters" value="Accessories" /><label htmlFor="Accessories">&nbsp;Accessories</label></li>
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
                <div className='product--item-list'>
                    <div className='pagination-container'>
                    <Pagination
                        count={count}
                        size="large"
                        page={page}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChange}
                    />
                    </div>
                    <div className='product--cards'>
                        {products.data === undefined || products.data.length === 0 ? 
                        (
                            <Fragment>
                                <Spinner />
                            </Fragment>
                        ) : (
                            <Fragment>
                                {_DATA.currentdata().map((card) => { 
                                    return (
                                        <div className='product--card'>
                                            <div className='product-image' style={{backgroundImage: `url(${card.media.source})`}}></div>
                                            <div className='product-title'><h2>{card.name}
                                            </h2><span>{card.categories.map((cat) => cat.name)}</span></div>
                                            <div className='product-price'><span>{card.price.formatted_with_symbol}</span><button>Add to Cart</button></div>
                                        </div>
                                    )
                                })}
                            </Fragment>
                        )
                    }

                    </div>
                    <div className='pagination-container__bottom'>
                    <Pagination
                        count={count}
                        size="large"
                        page={page}
                        variant="outlined"
                        shape="rounded"
                        onChange={handleChange}
                    />
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

ProductDisplay.propTypes = {
    GetAllProducts: PropTypes.func.isRequired,
    setFilteredProducts: PropTypes.func.isRequired,
    clearFilters: PropTypes.func.isRequired

  };


  const mapStateToProps = (state) => {
    const visibleExpenses = filterSelector(state.products, state.filters);
    return {
        products: state.products,
        filters: state.filters,
        productCount: visibleExpenses.length,
    };
  };

export default connect(mapStateToProps, {GetAllProducts, clearFilters, setFilteredProducts})(ProductDisplay);