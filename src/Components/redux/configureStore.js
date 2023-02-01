import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rocket-state/Rocket';
import missionsReducer, { fetchMissions } from './Mission-state/Mission';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

store.dispatch(fetchMissions());

export default store;
