import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    if (rockets === undefined) {
      dispatch(fetchRockets());
    }
  }, []);

  return (
    <ul className="container">
      {(typeof rockets !== 'undefined') ? rockets.map((rocket) => (
        <li key={rocket.id} className="row">
          <div className="col-md-3">
            <img src={rocket.flickr_images[0]} alt="Rocket" />
          </div>
          <div className="col-md-9 d-flex flex-column">
            <h2 className="rocket-name">{rocket.rocket_name}</h2>
            <p className="rocket-description">{rocket.description}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        </li>
      ))
        : <li>Loading...</li>}
    </ul>
  );
};

export default Rockets;
