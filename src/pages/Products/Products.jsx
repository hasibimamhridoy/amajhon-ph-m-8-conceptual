import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductsCard';

const Products = () => {

    const {products} = useLoaderData()
    console.log(products);

    return (
        <div className='grid grid-cols-3 gap-5 px-10'>
            {products?.map(product=><ProductCard key={product?.id} product={product}></ProductCard>)}
        </div>
    );
};

export default Products;