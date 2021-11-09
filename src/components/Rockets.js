import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { bookRocket, fetchRockets, cancelRocket } from '../redux/rockets/rockets';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    if (rockets === undefined) {
      dispatch(fetchRockets());
    }
  }, []);

  const onClick = (e) => {
    if (e.target.className === 'reserve-btn') {
      dispatch(bookRocket(e.target.id));
    } else {
      dispatch(cancelRocket(e.target.id));
    }
  };

  return (
    <ul className="container">
      {(typeof rockets !== 'undefined')
        ? rockets.map((rocket) => (
          <li key={rocket.id} className="row mb-3">
            <img src={rocket.flickr_images[0]} alt="Rocket" className="col-lg-3 col-md-6 mb-3 mb-lg-0" />
            <div className="col-lg-9 d-flex flex-column align-items-start">
              <h2 className="rocket-name">{rocket.rocket_name}</h2>
              <p className="rocket-description">
                <small className={rocket.reserved ? 'reserved' : 'd-none'}>
                  Reserved
                </small>
                {rocket.description}
              </p>
              <button
                type="button"
                id={rocket.id}
                onClick={onClick}
                className={!rocket.reserved ? 'reserve-btn' : 'cancel-btn'}
              >
                {!rocket.reserved ? 'Reserve Rocket' : 'Cancel Reservation'}
              </button>
            </div>
          </li>
        ))
        : <li>Loading...</li>}
    </ul>
  );
};

export default Rockets;
