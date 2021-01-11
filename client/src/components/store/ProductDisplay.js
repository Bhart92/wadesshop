import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import FilterBar from './FilterBar';
import Spinner from '../layout/Spinner';
import { GetAllProducts } from '../../actions/shopify';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import usePagination from "../pagination/Pagination";
import filterProducts from "../filter/filter";



const ProductDisplay = ({GetAllProducts, products}) => {
    useEffect(() => {
        GetAllProducts();
    }, [GetAllProducts]);


        // RETURNS AN ARRAY OF ITEMS WITH CATEGORIES MATCHING THE PASSED IN STRING // NEED TO CREATE LINK FOR EACH FILTER AND USE THE NEW ARRAY FOR DISPLAY
        // console.log(filterProducts(products.data, 'T Shirt'))
    
    
    
    const PER_PAGE = 8;
    let _DATA = usePagination(!products.data ? products.data = [] : products.data, PER_PAGE);
    let [page, setPage] = useState(1);
    if(!products.data){
        return <Redirect to='/' />;
    }
    const count = Math.ceil(products.data.length / PER_PAGE);
    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };
    

    return (
        <Fragment>
            <div className='product-container'>
                <Fragment><FilterBar /></Fragment>
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
    GetAllProducts: PropTypes.func.isRequired
  };
  
const mapStateToProps = state => ({
    products: state.products
  });

export default connect(mapStateToProps, {GetAllProducts})(ProductDisplay);