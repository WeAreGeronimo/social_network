import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import _css from './Status.module.css';
import {
  getStatusFromAPI,
  setNewStatus,
} from '../../../../redux/profile_reducer';

const StatusH = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.setNewStatus(status);
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
      <div className={_css.timer_status}>Обновлено очень давно</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  status: state.profilePage.status,
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {
  getStatusFromAPI,
  setNewStatus,
})(StatusH);
