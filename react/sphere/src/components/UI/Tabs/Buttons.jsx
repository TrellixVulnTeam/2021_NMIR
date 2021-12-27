import React, { useState, useEffect } from 'react'
import s from './Buttons.module.scss';
import { GiDragonBalls } from 'react-icons/gi';

const Buttons = ({ categories, filter, activeCategory }) => {
    const [size, setSize] = useState(false);

    useEffect(() => {
        displayWidth()
    }, [])

    const displayWidth = () => {
        window.addEventListener('resize', () => {
            setSize(window.innerWidth)
            return
        })
    }

    return (
        <div className={s.buttons}>
            { 
                categories?.map((category, index) => (
                    <button 
                        className={activeCategory === category ? s.tabActive : s.tabBtn}
                        type='button' 
                        onClick={() => filter(category)} 
                        key={Date.now() + category}>
                            { 
                                size > 400 ? category : category.slice(0, 3) // !
                            }
                    </button>
                )) 
            }
        </div>
    )
}

export default Buttons
