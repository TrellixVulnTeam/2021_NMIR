import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

const Sidebar = ({ navToggle }) => {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    height: 100vh;
    position: fixed;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width: 1200px) {
        transform: translateX(-100%);
        z-index: 25;
    }
`;

export default Sidebar
