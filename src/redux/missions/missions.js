const FETCH_MISSIONS = 'space-travellers/missions/FETCH_MISSIONS';

export const getMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

const initialState = {};

const getMissionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, missions: action.payload };
    default:
      return state;
  }
};

export default getMissionsReducer;
