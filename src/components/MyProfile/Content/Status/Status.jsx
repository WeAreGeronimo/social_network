import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import _css from './Status.module.css';
import {
  getStatusFromAPI,
  setNewStatus,
} from '../../../../redux/profile_reducer';
import { beautifulWhenTimeText } from '../../../../common/TimeTextFunc';

const StatusH = (props) => {
  const initialTimeValue = beautifulWhenTimeText(props.timeCreation);
  const [whenUpdateStore, setWhenUpdate] = useState(initialTimeValue);
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const oldTimer = useRef(null);

  const updateTimeSeconds = 1000;

  useEffect(() => {
    clearInterval(oldTimer.current);
    oldTimer.current = setInterval(() => {
      const time = beautifulWhenTimeText(props.timeCreation);
      setWhenUpdate(time);
    }, updateTimeSeconds);
    // return () => clearInterval(oldTimer.current);
  }, [props.timeCreation]);

  useEffect(() => {
    setStatus(props.status);
    setWhenUpdate(beautifulWhenTimeText(props.timeCreation));
  }, [props.status]);

  const activateEditMode = () => {
    setWhenUpdate(null);
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setWhenUpdate(null);
    setEditMode(false);
    const timeNow = Date.now();
    clearInterval(oldTimer.current);
    props.setNewStatus(status, timeNow);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  let checkRightsForChangingStatus = false;
  if (props.AuthUserId === props.profile.id) {
    checkRightsForChangingStatus = true;
  }

  return (
    <div className={_css.statusWrapper}>
      {checkRightsForChangingStatus && (
        <div className={_css.status}>
          {!editMode &&
            (status ? (
              <span onClick={activateEditMode}>{status}</span>
            ) : (
              <span
                className={_css.emptyStatus}
                onClick={activateEditMode}
              >
                Нажмите, чтобы изменить
              </span>
            ))}
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
      )}
      {!checkRightsForChangingStatus && (
        <div className={_css.status}>
          <span>{status}</span>
        </div>
      )}
      {status ? (
        <div className={_css.timer_status}>
          {editMode
            ? null
            : whenUpdateStore && `Обновлено${whenUpdateStore}`}
        </div>
      ) : (
        <div className={_css.timer_status} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  status: state.profilePage.statusH.statusText,
  timeCreation: state.profilePage.statusH.timeCreation,
  AuthUserId: state.auth.userId,
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {
  getStatusFromAPI,
  setNewStatus,
})(StatusH);
