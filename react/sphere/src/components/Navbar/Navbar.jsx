import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';
import s from './Navbar.module.scss';
import { GiHolosphere } from 'react-icons/gi';

import Burger from '../UI/Burger';
import Button from '../UI/Button';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [backgroundNavbar, setBackgroundNavbar] = useState(false)

    useEffect(() => {
        changeBackground()
        return () => {
            changeBackground()
        }
    }, [])

    const changeBackground = () => {
        if(window.scrollY > 60) {
            setBackgroundNavbar(true)
        } else {
            setBackgroundNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={backgroundNavbar ? [s.nav, 'navActive'].join(' ') : s.nav}>
            <Link className={s.logo} to="/"><GiHolosphere /></Link>
            <ul className={`${ open ? s.isMenu : '' }`}
                onClick={() => setOpen(prevState => !prevState)}
            >
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><Button title={'Sign Up'} /></li>
            </ul>
            <Burger open={open} setOpen={setOpen} />
        </nav>
    )
}

export default Navbar
