import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from './components/Global_components/Nav/Nav';
import MyFriends from './components/MyFriends/MyFriends';
import MyVideos from './components/MyVideos/MyVideos';
import MyAudios from './components/MyAudios/MyAudios';
import MyDialogsContainer from './components/MyDialogs/MyDialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/MyProfile/ProfileContainer';
import HeaderAPIComponent from './components/Global_components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initialiseApp } from './redux/app_reducer';
import Preloader from './components/Global_components/preloader/Preloader';
import RegistrationContainer from './components/Registration/Registration';

class App extends React.Component {
  componentDidMount() {
    this.props.initialiseApp();
  }

  render() {
    if (!this.props.initialised) {
      return <Preloader />;
    }

    return (
      <div className="grid_container">
        <HeaderAPIComponent />
        <Nav />
        <div className="module">
          <Route
            exact
            path="/profile/:userId?"
            render={() => <ProfileContainer />}
          />
          <Route
            path="/dialogs"
            render={() => <MyDialogsContainer />}
          />
          <Route path="/friends" render={() => <MyFriends />} />
          <Route path="/videos" render={() => <MyVideos />} />
          <Route path="/audios" render={() => <MyAudios />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route
            path="/registration"
            render={() => <RegistrationContainer />}
          />

          {/* <Route path='/profile/:userId?'><ProfileContainer /></Route>
          <Route path='/dialogs'><MyDialogsContainer /></Route>
          <Route path='/friends' component={My_Friends} />
          <Route path='/videos' component={My_Videos} />
          <Route path='/audios' component={My_Audios} />
          <Route exact path='/users'><Users_container /></Route>
          <Route path='/login'><Login /></Route> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialised: state.app.initialised,
});

export default connect(mapStateToProps, { initialiseApp })(App);
