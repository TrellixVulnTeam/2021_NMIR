import React, { useState, useEffect } from 'react'
import s from '../scss/SingleProduct.module.scss';
import { useParams, useNavigate } from 'react-router-dom'

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`url/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    return (
        <div className={[s.product, 'section'].join(' ')}>
            <button onClick={goBack}>Go Back</button>
            Single Product {id}
        </div>
    )
}

export default SingleProduct
