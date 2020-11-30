import { setAuth } from './auth_reducer';

const INITIALISED_SUCCESSED = 'INITIALISED_SUCCESSED';

const initialState = {
  initialised: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_SUCCESSED:
      return {
        ...state,
        initialised: true,
      };

    default:
      return state;
  }
};

export const initialisedSuccess = () => ({
  type: INITIALISED_SUCCESSED,
});

export const initialiseApp = () => (dispatch) => {
  const promise = dispatch(setAuth());
  Promise.all([promise]).then(() => {
    dispatch(initialisedSuccess());
  });
};

export default appReducer;
