import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions({ id: 1 }));
  }, []);
  return (
    <div>Hello From Missions</div>
  );
};

export default Missions;
