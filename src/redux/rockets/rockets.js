const FETCH_ROCKETS = 'space-travellers/rockets/FETCH_ROCKETS';

const URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {};

export const fetchRocketsSuccess = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const fetchRockets = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((rockets) => dispatch(fetchRocketsSuccess(rockets)));
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.payload };
    default:
      return state;
  }
};

export default rocketsReducer;
