// import {} from '../actions/actionTypes'

const initialState = {
  auth: false,
  notification: [],
  trades: [],
  user: '',
};

const rootReducer = (state = initialState, action) => {
  // action switch here
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
