import React from 'react'
import Loader from "react-loader-spinner";
import s from './Load.module.scss';

const Load = () => {
    return (
        <div className={s.loader}>
            <Loader 
                type="Circles" 
                color="hsl(176, 96%, 69%)" 
                height={380} 
                width={380}
            />
        </div>
    )
}

export default Load
