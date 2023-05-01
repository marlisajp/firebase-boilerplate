import { configureStore } from '@reduxjs/toolkit';
import { dummyReducer } from '../reducers/dummyReducer';
import authReducer from '../reducers/authReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    dummy: dummyReducer,
  },
});

export default store;
