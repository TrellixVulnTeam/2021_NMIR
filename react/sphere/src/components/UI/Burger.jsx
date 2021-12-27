import React from 'react'
import s from './Burger.module.scss';
import { RiMenu5Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';

const Burger = ({ open, setOpen }) => {

    return (
        <div className={s.burger}>
            {
                open ? 
                    <IoClose 
                        onClick={() => setOpen(!open)}
                    /> 
                    : 
                    <RiMenu5Fill
                        onClick={() => setOpen(!open)}
                    />
            }
        </div>
    )
}

export default Burger
