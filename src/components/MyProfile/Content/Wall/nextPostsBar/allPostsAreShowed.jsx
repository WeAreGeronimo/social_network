import React from 'react';

import _css from './allPostsAreShowed.module.css';

const AllPostsAreShowed = (props) => {
  return (
    <div>
      <div className={_css.nextBlockShowed}>
        <span>Показаны все посты</span>
      </div>
    </div>
  );
};

export default AllPostsAreShowed;
