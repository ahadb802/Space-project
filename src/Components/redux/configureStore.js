import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer, { Alldata } from './Rocket-state/Rocket';

const store = configureStore({
  reducer: {
    rocketData: rocketsReducer,
  },
});
store.dispatch(Alldata());
export default store;
