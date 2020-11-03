import React from 'react';
import _css from './Rating.module.css';


const RatingBar = (props) => {
    return <div className={_css.rating}>
        

        <div style={{  width:  `${props.lvl*198/100}px`}} className={_css.lvl_rating}> <div className={_css.persent}>{props.lvl}%</div></div>
        {/* <div className={_css.background_rating}></div> */}
        
    </div>
}

export default RatingBar; 