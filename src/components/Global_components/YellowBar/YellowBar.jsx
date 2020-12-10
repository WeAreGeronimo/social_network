import React from 'react';
import _css from './YellowBar.module.css';

const YellowBar = (props) => {
  return (
    <div className={_css.name__bar}>
      {props.name} {props.surname}
    </div>
  );
};

export default YellowBar;
