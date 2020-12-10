import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import _css from './Status.module.css';
import {
  getStatusFromAPI,
  setNewStatus,
} from '../../../../redux/profile_reducer';
import { beautifulWhenTimeText } from '../../../../TimeTextFunc';

const StatusH = (props) => {
  const initialTimeValue = beautifulWhenTimeText(props.timeCreation);
  const [whenUpdateStore, setWhenUpdate] = useState(initialTimeValue);
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const oldTimer = useRef(null);
  useEffect(() => {
    clearInterval(oldTimer.current);
    oldTimer.current = setInterval(() => {
      const time = beautifulWhenTimeText(props.timeCreation);
      setWhenUpdate(time);
    }, 1000);

    // return () => clearInterval(oldTimer.current);
  }, [props.timeCreation]);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    const timeNow = Date.now();
    props.setNewStatus(status, timeNow);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className={_css.statusWrapper}>
      <div className={_css.status}>
        {!editMode &&
          (status ? (
            <span onClick={activateEditMode}>{status}</span>
          ) : (
            <span onClick={activateEditMode}>
              Нажмите, чтобы изменить
            </span>
          ))}{' '}
        {editMode && (
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          />
        )}
      </div>
      <div className={_css.timer_status}>{whenUpdateStore}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  status: state.profilePage.statusH.statusText,
  timeCreation: state.profilePage.statusH.timeCreation,
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {
  getStatusFromAPI,
  setNewStatus,
})(StatusH);
