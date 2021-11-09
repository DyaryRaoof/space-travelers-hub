import {
  Container, Col, Row, ListGroup,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const reserverdMissions = useSelector((state) => state.missionsReducer
    .missions.filter((mission) => mission.reserved === true));

  const reservedRockets = useSelector((state) => state.rocketsReducer
    .rockets.filter((rocket) => rocket.reserved === true));

  return (
    <Container className="profile-container">
      <Row>
        <Col>
          <h1>My Missions</h1>
          <ListGroup>
            {reserverdMissions.map((mission) => (
              <ListGroup.Item key={mission.mission_id}>
                {mission.mission_name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <h1>My Rockets</h1>
          <ListGroup>
            {reservedRockets.map((rocket) => (
              <ListGroup.Item key={rocket.id}>
                {rocket.rocket_name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
