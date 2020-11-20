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









const App = () => {
  return (
   
    <div className="grid_container">
      <HeaderAPIComponent />
      <Nav />
      <div className='module'>

        <Route path='/profile/:userId?'><ProfileContainer /></Route>
        <Route exact path='/dialogs'><My_dialogs_container /></Route>
        <Route path='/friends' component={My_Friends} />
        <Route path='/videos' component={My_Videos} />
        <Route path='/audios' component={My_Audios} />
        <Route exact path='/users'><Users_container /></Route>


      </div>

    </div>
 





 




  );
}






export default App;
