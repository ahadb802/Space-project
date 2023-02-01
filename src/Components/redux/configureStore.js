import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rocket-state/Rocket';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});
export default store;
