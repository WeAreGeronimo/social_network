import React from 'react';
import './App.css';
import Header from './components/Global_components/Header/Header';
import Nav from './components/Global_components/Nav/Nav';
import My_profile from './components/My_profile/my_profile';
import {Route} from 'react-router-dom';
import My_Friends from './components/My_friends/My_Friends';
import My_Videos from './components/My_videos/My_Videos';
import My_Audios from './components/My_audios/My_Audios';
import My_dialogs_container from './components/My_dialogs/My_Dialogs_Container';









const App = (props) => {
  return (
   
    <div className="grid_container">
      <Header />
      <Nav />
      <div className='module'>

        <Route exact path='/profile'><My_profile /></Route>
        <Route exact path='/dialogs'><My_dialogs_container /></Route>
        <Route path='/friends' component={My_Friends} />
        <Route path='/videos' component={My_Videos} />
        <Route path='/audios' component={My_Audios} />


      </div>

    </div>
 





 




  );
}






export default App;
