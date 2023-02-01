import Rockets from '../../Api/Rocketsapi';

const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVED_ROCKETS = 'RESERVED_ROCKETS';

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.rockets;
      // return action.rockets;
    case RESERVED_ROCKETS:
      return (state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      })
      );

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

export const reservedRocket = (id) => async (dispatch) => {
  dispatch({
    type: RESERVED_ROCKETS,
    id,
  });
};

export default rocketsReducer;
