import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    if (Object.keys(rockets).length === 0) {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <div>Hello From Rockets</div>
  );
};

export default Rockets;
