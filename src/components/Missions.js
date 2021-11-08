import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchMissions from '../api';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMissions(dispatch);
  }, []);
  return (
    <div>Hello From Missions</div>
  );
};

export default Missions;
