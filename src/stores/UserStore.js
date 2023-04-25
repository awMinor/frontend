import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  isLoggedIn: false,
  email: '',
  id: '',
  token: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, email: action.payload.email, id: action.payload.id, token: action.payload.token };
    default:
      return state;
  }
};

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
