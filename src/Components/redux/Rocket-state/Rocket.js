const FETCH_ROCKETS = 'FETCH_ROCKETS';

const initialState = [];

export const Rockets = () => async (dispatch) => {
  const resp = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await resp.json();
  const rockets = [];
  data.forEach((rocket) => {
    rockets.push({
      id: rocket.rocket_id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    });
  });
  dispatch({
    type: FETCH_ROCKETS,
    rockets,
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default rocketsReducer;
