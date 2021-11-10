const FETCH_ROCKETS = 'space-travellers/rockets/FETCH_ROCKETS';
const BOOK_ROCKET = 'space-travellers/rockets/BOOK_ROCKET';
const CANCEL_ROCKET = 'space-travellers/rockets/CANCEL_ROCKET';

const URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = { rockets: [] };

export const fetchRocketsSuccess = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const fetchRockets = () => async (dispatch) => {
  await fetch(URL)
    .then((response) => response.json())
    .then((rockets) => dispatch(fetchRocketsSuccess(rockets)));
};

export const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

export const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rockets: action.payload };
    case BOOK_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === parseInt(action.payload, 10)) {
            return { ...rocket, reserved: true };
          }
          return rocket;
        }),
      };
    case CANCEL_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id === parseInt(action.payload, 10)) {
            return { ...rocket, reserved: false };
          }
          return rocket;
        }),
      };
    default:
      return state;
  }
};

export default rocketsReducer;
