import React from 'react';

import _css from './allCommentsAreShowed.module.css';

const AllCommentsAreShowed = (props) => {
  return (
    <div>
      <div className={_css.nextBlockShowed}>
        <span>Показаны все комментарии</span>
      </div>
    </div>
  );
};

export default AllCommentsAreShowed;
