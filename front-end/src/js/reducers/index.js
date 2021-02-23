import { combineReducers } from 'redux';

import UserReducer from './userReducer';
import OrderReducer from './orderReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  UserReducer,
  OrderReducer,
  form: formReducer
});
