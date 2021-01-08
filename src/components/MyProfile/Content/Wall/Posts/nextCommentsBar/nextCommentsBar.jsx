import React from 'react';
import _css from './nextCommentsBar.module.css';
import AllCommentsAreShowed from './allCommentsAreShowed';

const NextCommentsBar = (props) => {
  if (props.commentsCountInApi <= 3) {
    props.setAllCommentsAreShowed(true);
  }
  return (
    <div>
      {!props.allCommentsAreShowed && (
        <div
          className={_css.nextBlock}
          onClick={() => {
            props.getNextPostsComments(
              props.postId,
              props.nextComments,
            );
            if (props.nextComments + 1 < props.countOfLoadsCom) {
              props.setNextComments(props.nextComments + 1);
            } else if (
              props.nextComments + 1 ===
              props.countOfLoadsCom
            ) {
              props.setAllCommentsAreShowed(true);
            }
          }}
        >
          <span>Загрузить еще...</span>
        </div>
      )}
      {/* {props.allCommentsAreShowed && <AllCommentsAreShowed />} */}
    </div>
  );
};

export default NextCommentsBar;
