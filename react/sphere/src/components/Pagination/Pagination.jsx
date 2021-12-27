import React, { useState } from 'react'
import s from './Pagination.module.scss';
import { GrPrevious, GrNext } from 'react-icons/gr'

const Pagination = ({ itemsPerPage, totalItems, votePage, nextPage, prevPage, currentPage }) => {
    const pageNumbers = []

    for(let i = 1; i <= (totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <ul className={s.list}>
                <li>
                    <button 
                        disabled={currentPage <= 1 ? true : false}
                        className={s.prev} 
                        onClick={prevPage}>
                            <GrPrevious />
                    </button>
                </li>
                {
                    pageNumbers?.map(number => (
                        <li key={number} className={number === currentPage ? s.activePage : ''}>
                            <a href="#" onClick={() => votePage(number) }>{number}</a>
                        </li>
                    ))
                }
                <li>
                    <button 
                        disabled={currentPage >= totalItems / itemsPerPage ? true : false}
                        className={s.next} 
                        onClick={nextPage}>
                            <GrNext />
                    </button>
                </li>
            </ul>
        </>
    )
}

export default Pagination
