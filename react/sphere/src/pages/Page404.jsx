import React from 'react'
import s from '../scss/Page404.module.scss';
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <h1>
            This page doesn't exist. Go to <Link to='/'> HOME PAGE </Link>.
        </h1>
    )
}

export default Page404
