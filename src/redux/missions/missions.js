const FETCH_MISSIONS = 'space-travellers/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'space-travellers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travellers/missions/LEAVE_MISSION';

export const getMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const initialState = { missions: [] };

const getMissionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, missions: action.payload };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, reserved: true };
          }
          return mission;
        }),
      };

    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.payload) {
            return { ...mission, reserved: false };
          }
          return mission;
        }),
      };

    default:
      return state;
  }
};

export default getMissionsReducer;
