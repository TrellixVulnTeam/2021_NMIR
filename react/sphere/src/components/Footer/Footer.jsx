import React from 'react';
import s from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <div id='footer' className={s.footer}>
            <div className={s.social}>
                <Link to='https://www.instagram.com/'><AiOutlineInstagram /></Link>
                <Link to='https://www.facebook.com/'><AiOutlineFacebook /></Link>
                <Link to='https://www.twitter.com/'><AiFillTwitterCircle /></Link>
            </div>
        </div>
    )
}

export default Footer
