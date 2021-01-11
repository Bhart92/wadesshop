import React from 'react';
// import PropTypes from 'prop-types';

const FilterBar = () => {
    return (
        <div className='product--filter-bar'>
            <h2>Filter</h2>
            <div className='filter-bar--clothes'>
                <h3>Clothes</h3>
                <ul>
                    <li><span>></span>Shirts</li>
                    <li><span>></span>Pants</li>
                    <li><span>></span>Accessories</li>
                </ul>
            </div>
            <div className='filter-bar--jewlery'>
            <h3>jewlery</h3>
            <ul>
                    <li><span>></span>Necklaces</li>
                    <li><span>></span>Rings</li>
                    <li><span>></span>Watches</li>
                </ul>
            </div>
    </div>
    )
}

export default FilterBar;