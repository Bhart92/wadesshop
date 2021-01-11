import { useState } from "react";

export default function filterProducts(arr, category) {
    switch(category){
        case 'T Shirt':
            return arr.filter((item, i) => item.categories[0].name === 'T Shirt');
            default:
                return arr;
            }
};

