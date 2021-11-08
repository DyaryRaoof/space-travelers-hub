import axios from 'axios';
import { getMissions } from '../redux/missions/missions';

const BASE_URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = () => async (dispatch) => {
  const isMissionsFetched = localStorage.getItem('missions');
  if (!isMissionsFetched) {
    const result = await axios.get(BASE_URL);
    dispatch(getMissions(result.data.map(
      (mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }),
    )));

    localStorage.setItem('missions', true);
  }
};

export default fetchMissions;
