import Rockets from '../../Api/Rocketsapi';

const FETCH_ROCKETS = 'FETCH_ROCKETS';

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.rockets;
    default:
      return state;
  }
};

export const Alldata = () => async (dispatch) => {
  const rockets = await Rockets();
  dispatch({
    type: FETCH_ROCKETS,
    rockets,
  });
};

export default rocketsReducer;
