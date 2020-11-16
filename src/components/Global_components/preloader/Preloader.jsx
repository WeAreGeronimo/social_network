import React from 'react';
import _css from './Preloader.module.css';



const Preloader = () => {
    
    return <div className={_css.wrapper}>
        

        <div className={_css.lds_ellipsis}><div></div><div></div><div></div><div></div></div>

            
        </div>
    
}

export default Preloader; 