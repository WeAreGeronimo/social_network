import React from 'react';
import Content from './Content/Content';
import MiddleColumnProfile from './MiddleColumnProfile/MiddleColumnProfile';
import Preloader from '../Global_components/preloader/Preloader';
import YellowBar from '../Global_components/YellowBar/YellowBar';
import _css from './MyProfile.module.css';

const MyProfile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={_css.my_profile_css}>
      <YellowBar
        name={props.profile.name}
        surname={props.profile.surname}
      />
      <MiddleColumnProfile profile={props.profile} />
      <Content profile={props.profile} {...props} />
    </div>
  );
};

export default MyProfile;
