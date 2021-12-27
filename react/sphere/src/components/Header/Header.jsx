import React from 'react'
import Navbar from '../Navbar/Navbar'
import s from './Header.module.scss'

const Header = () => {

    return (
        <header className={s.header}>
            <Navbar />
        </header>
    )
}

export default Header
