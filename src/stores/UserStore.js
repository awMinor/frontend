import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  isLoggedIn: false,
  email: '',
  id: '',
  token: '',
  name: '',
};

if (localStorage.getItem('user')) {
  const user = JSON.parse(localStorage.getItem('user'));
  initialState.isLoggedIn = true;
  initialState.email = user.email;
  initialState.id = user.id;
  initialState.token = user.token;
  initialState.name = user.name;
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, email: action.payload.email, id: action.payload.id, token: action.payload.token, name: action.payload.name };
    case 'LOGOUT':
      localStorage.removeItem('user');
      return { ...state, isLoggedIn: false, email: '', id: '', token: '', name: '' };
    default:
      return state;
  }
};

const store = createStore(userReducer, applyMiddleware(thunk));

export default store;
