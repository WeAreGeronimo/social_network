/* eslint-disable import/no-unresolved */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import dialogsReducer from './dialogs_reducer';
import profileReducer from './profile_reducer';
import usersReducer from './users_reducer';
import appReducer from './app_reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// eslint-disable-next-line no-undef
window.store = store;

export default store;
