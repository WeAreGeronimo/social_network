import React from 'react';
import _css from './Delete.module.css';

const DeleteButton = (props) => {
  // className={`${_css.liked} ${props.size ? `_css${size}` : ''}`}
  return props.focusDeleteIcon ? (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label,react/button-has-type
    <svg
      className={_css.focus}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320.000000 320.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)">
        <path
          d="M267 2933 l-267 -268 532 -532 533 -533 -533 -533 -532 -532 267
-268 268 -267 532 532 533 533 533 -533 532 -532 268 267 267 268 -532 532
-533 533 533 533 532 532 -267 268 -268 267 -532 -532 -533 -533 -533 533
-532 532 -268 -267z"
        />
      </g>
    </svg>
  ) : (
    <svg
      className={_css.unFocus}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320.000000 320.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,320.000000) scale(0.100000,-0.100000)">
        <path
          d="M267 2933 l-267 -268 532 -532 533 -533 -533 -533 -532 -532 267
-268 268 -267 532 532 533 533 533 -533 532 -532 268 267 267 268 -532 532
-533 533 533 533 532 532 -267 268 -268 267 -532 -532 -533 -533 -533 533
-532 532 -268 -267z"
        />
      </g>
    </svg>
  );
};

export default DeleteButton;
