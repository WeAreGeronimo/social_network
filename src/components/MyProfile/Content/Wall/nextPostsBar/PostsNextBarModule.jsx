import React from 'react';
import AllPostsAreShowed from './allPostsAreShowed';
import NextPostsBar from './nextPostsBar';

const PostsNextBarModule = (props) => {
  return (
    <div>
      {props.allPostAreShowed ? (
        <AllPostsAreShowed />
      ) : (
        <NextPostsBar
          nextPosts={props.nextPosts}
          countOfLoads={props.countOfLoads}
          setNextPosts={props.setNextPosts}
          setAllPostAreShowed={props.setAllPostAreShowed}
          profileId={props.profileId}
          getNextWallPosts={props.getNextWallPosts}
        />
      )}
    </div>
  );
};

export default PostsNextBarModule;
