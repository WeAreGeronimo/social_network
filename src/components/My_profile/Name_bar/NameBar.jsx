import React from 'react';
import _css from './NameBar.module.css';

const NAME_BAR = (props) => {
    return <div className={_css.name__bar}>{props.profile.fullName}</div>
}

export default NAME_BAR; 