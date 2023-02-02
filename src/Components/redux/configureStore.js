import { configureStore } from '@reduxjs/toolkit';
import missionsReducer, { fetchMissions } from './Mission-state/Mission';
import rocketsReducer, { Alldata } from './Rocket-state/Rocket';

const store = configureStore({
  reducer: {
    rocketData: rocketsReducer,
    missions: missionsReducer,
  },
});

store.dispatch(fetchMissions());
store.dispatch(Alldata());
export default store;
