import React from 'react'
import s from './Button.module.scss'
import {  Link } from 'react-router-dom';

const Button = ({ title, to, ...props }) => {
    return (
        <div className={[s.login, 'button'].join(' ')}>
            <Link to='/signup'>{title}</Link>
        </div>
    )
}

export default Button
