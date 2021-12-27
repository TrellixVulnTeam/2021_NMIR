import React, { useState, useEffect } from 'react'
import s from './Cards.module.scss'
import Button from '../Button';
import Sphere from '../../Sphere/Sphere';
import Load from '../../Loader/Load';
import Pagination from '../../Pagination/Pagination';
import Slide from 'react-reveal/Slide';

const Cards = ({ galleryItems, activeCategory }) => {
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(12)

    useEffect(() => {
        const getItems = () => {
            setLoading(true)
            // const res = await axios.get('url')
            setLoading(false)
        }
        getItems()
    }, [])

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage
    const currentItem = galleryItems.slice(firstItemIndex, lastItemIndex)

    const votePage = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)

    if(loading) {
        return <Load />
    }

    return (
        <>
            <ul className={s.cards}>
                {
                    currentItem?.map((obj, index )=> (
                        <Slide key={obj._id} bottom delay={`${index}99`}>
                            <li>
                                <div className={s.head}>
                                    <h3>{obj.title}</h3>
                                    {obj.icon}
                                </div>
                                <div className={s.body}>
                                    {/* <img src="" alt="" /> */}
                                    <Sphere/>
                                </div>
                                <div className={s.foot}>
                                    <span>{obj.desc}</span>
                                    <Button title='Buy Now'/>
                                </div>
                            </li>
                        </Slide>
                    ))
                }
            </ul>
            <Pagination 
                itemsPerPage={itemsPerPage} 
                totalItems={galleryItems.length} 
                votePage={votePage}
                nextPage={nextPage}
                prevPage={prevPage}
                currentPage={currentPage}
            />
        </>

    )
}

export default Cards
