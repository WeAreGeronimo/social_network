import React from 'react';
import './App.css';
import Nav from './components/Global_components/Nav/Nav';
import {Route} from 'react-router-dom';
import My_Friends from './components/My_friends/My_Friends';
import My_Videos from './components/My_videos/My_Videos';
import My_Audios from './components/My_audios/My_Audios';
import My_dialogs_container from './components/My_dialogs/My_Dialogs_Container';
import Users_container from './components/Users/Users_container';
import ProfileContainer from './components/My_profile/ProfileContainer';
import HeaderAPIComponent from './components/Global_components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initialiseApp} from './redux/app_reducer'
import Preloader from './components/Global_components/preloader/Preloader';








class App extends React.Component {
  componentDidMount() {
    this.props.initialiseApp();
}

  render() {

    if(!this.props.initialised) {
      return <Preloader />
    }

    return (
      <div className="grid_container">
        <HeaderAPIComponent />
        <Nav />
        <div className='module'>

          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <My_dialogs_container />} />
          <Route path='/friends' render={() => <My_Friends />} />
          <Route path='/videos' render={() => <My_Videos />} />
          <Route path='/audios' render={() => <My_Audios />} />
          <Route path='/users' render={() => <Users_container />} />
          <Route path='/login' render={() => <Login />} />

          {/* <Route path='/profile/:userId?'><ProfileContainer /></Route>
          <Route path='/dialogs'><My_dialogs_container /></Route>
          <Route path='/friends' component={My_Friends} />
          <Route path='/videos' component={My_Videos} />
          <Route path='/audios' component={My_Audios} />
          <Route exact path='/users'><Users_container /></Route>
          <Route path='/login'><Login /></Route> */}

        </div>

      </div>)
  }

}


const mapStateToProps = (state) => ({
  initialised: state.app.initialised,
})



export default connect(mapStateToProps, {initialiseApp})(App);
