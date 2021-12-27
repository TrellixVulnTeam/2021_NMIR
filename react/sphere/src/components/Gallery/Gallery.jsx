import React, { useState, useEffect } from 'react'
import s from './Gallery.module.scss'
import data from '../../db-products';
import Buttons from '../UI/Tabs/Buttons';
import Cards from '../UI/Tabs/Cards';

const allCategories = ['All', ...new Set(data.map(el => el.category))]

const Gallery = () => {
    const [categories, setCategories] = useState(allCategories)
    const [galleryItems, setGalleryItems] = useState(data)
    const [activeCategory, setActiveCategory] = useState('All')

    const filter = (category) => {
        setActiveCategory(category)
        if(category === 'All') {
            setGalleryItems(data)
            return
        }

        const filteredData = data.filter(item => item.category === category)
        setGalleryItems(filteredData)
    }

    return (
        <div className={s.gallery}>
            <Buttons 
                categories={categories} 
                filter={filter} 
                activeCategory={activeCategory} 
            />
            <Cards galleryItems={galleryItems} activeCategory={activeCategory} />
        </div>
    )
}

export default Gallery
