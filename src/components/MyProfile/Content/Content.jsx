import React from 'react';

import AboutUser from './AboutUser/AboutUser';
import ContactInfo from './ContactInfo/ContactInfo';
import _css from './Content.module.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import Status from './Status/Status';

import WallContainer from './Wall/WallContainer';

const CONTENT = (props) => {
  return (
    <div className={_css.content}>
      <div className={_css.name_surname}>
        {props.profile.fullName}
      </div>
      <Status profile={props.profile} {...props} />
      <div className={_css.informations_about_user} />
      <AboutUser />
      <div className={_css.information_bar}>Информация</div>
      <ContactInfo profile={props.profile} />
      <PersonalInfo />
      <div className={_css.information_bar}>
        Стена
        <span className={_css.write_on_wall}>Написать на стене</span>
      </div>
      <WallContainer />
    </div>
  );
};

export default CONTENT;
