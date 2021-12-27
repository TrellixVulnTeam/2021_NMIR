import React, { useState, useEffect } from 'react';
import s from '../scss/Products.module.scss';
import Gallery from '../components/Gallery/Gallery';

const Products = () => {
    const [products, setProducts] = useState(null)

    return (
        <div className={[s.products, 'section'].join(' ')}>
            <h1>Sphere Categories</h1>
            <Gallery />
        </div>
    )
}

export default Products


    // useEffect(() => {
    //     fetch(`url/products`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

                {/* {
                products.map(product => (
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <h3>{product.title}</h3>
                    </Link>
                ))
            } */}