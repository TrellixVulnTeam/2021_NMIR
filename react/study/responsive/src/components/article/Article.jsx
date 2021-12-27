import React from 'react';
import './Article.css';

const Article = ({ imgUrl, date, text }) => {
    return (
        <div className="blog__container-article">
            <div className="blog__container-article--image">
                <img src={imgUrl} alt="blog image" />
            </div>
            <div className="blog__container-article--content">
            <div>
                <p>{date}</p>
                <h3>{text}</h3>
            </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article
