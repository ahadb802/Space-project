import Rockets from '../../Api/Rocketsapi';

const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVED_ROCKETS = 'RESERVED_ROCKETS';
const CANCEL_RESERVATION = 'CANCEL_RESERVATION';

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.rockets };
    case RESERVED_ROCKETS:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.id) return rocket;
          return { ...rocket, reserved: true };
        }),
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.id) return rocket;
          return { ...rocket, reserved: false };
        }),
      };

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

export const cancelreservation = (id) => async (dispatch) => {
  dispatch({
    type: CANCEL_RESERVATION,
    id,
  });
};
export default rocketsReducer;
