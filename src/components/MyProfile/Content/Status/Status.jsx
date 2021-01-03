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
  const handlerTime = useRef(null);
  const updateTimeSeconds = 1000;
  const updateText = () => {
    if (handlerTime.current !== null) {
      oldTimer.current = setInterval(() => {
        const time = beautifulWhenTimeText(handlerTime.current);
        setWhenUpdate(time);
      }, updateTimeSeconds);
    } else if (handlerTime == null) {
      oldTimer.current = setInterval(() => {
        const time = beautifulWhenTimeText(props.timeCreation);
        setWhenUpdate(time);
      }, updateTimeSeconds);
    }
  };

  useEffect(() => {
    clearInterval(oldTimer.current);
    updateText();
    // return () => clearInterval(oldTimer.current);
  }, [props.timeCreation, status]);

  useEffect(() => {
    setStatus(props.status);
    setWhenUpdate(beautifulWhenTimeText(props.timeCreation));
  }, [props.status]);

  const activateEditMode = () => {
    setWhenUpdate(null);
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    const timeNow = Date.now();
    clearInterval(oldTimer.current);
    props.setNewStatus(status, timeNow);
    handlerTime.current = timeNow;
    updateText();
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
      <div className={_css.timer_status}>
        Обновлено{whenUpdateStore}
      </div>
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
