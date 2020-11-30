import React from 'react';
import { connect } from 'react-redux';
import _css from './Status.module.css';
import {
  getStatusFromAPI,
  setNewStatus,
} from '../../../../redux/profile_reducer';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      status: this.props.status,
    };
  }

  componentDidMount() {
    let userId = this.props.profile.userId;
    if (!userId) {
      userId = 12604;
    }

    this.props.getStatusFromAPI(userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        status: this.props.status,
      });
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.setNewStatus(this.state.status);
  };

  render() {
    return (
      <div className={_css.statusWrapper}>
        <div className={_css.status}>
          {!this.state.editMode ? (
            <span
              onClick={this.activateEditMode}
              onChange={this.props.setNewStatus}
            >
              {this.props.status ? (
                this.props.status
              ) : (
                <span className={_css.empty}>
                  Нажмите, чтобы изменить
                </span>
              )}
            </span>
          ) : (
            <input
              onChange={this.onStatusChange}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              onBlur={this.deactivateEditMode}
              value={this.state.status}
            />
          )}
        </div>
        <div className={_css.timer_status}>Обновлено очень давно</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.profilePage.status,
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {
  getStatusFromAPI,
  setNewStatus,
})(Status);
