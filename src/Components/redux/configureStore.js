import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rocket-state/Rocket';
import missionsReducer from './Mission-state/Mission';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
