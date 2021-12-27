import React from 'react'
import s from '../scss/Blog.module.scss';

const Blog = () => {
    return (
        <div className={[s.blog, 'section'].join(' ')}>
            <h1>Blog</h1>
        </div>
    )
}

export default Blog
