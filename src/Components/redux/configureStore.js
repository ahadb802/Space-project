import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer, { Rockets } from './Rocket-state/Rocket';
import missionsReducer from './Mission-state/Mission';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

store.dispatch(Rockets());

export default store;
