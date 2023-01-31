import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer, { Rockets } from './Rocket-state/Rocket';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

store.dispatch(Rockets());

export default store;
