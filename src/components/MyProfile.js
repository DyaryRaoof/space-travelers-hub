import {
  Container, Col, Row, ListGroup,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsReducer
    .missions);

  const rockets = useSelector((state) => state.rocketsReducer
    .rockets);

  return (
    <Container className="profile-container">
      <Row>
        <Col>
          <h1 data-testid="header">My Missions</h1>
          <ListGroup>
            {missions.filter((mission) => mission.reserved === true).map((mission) => (
              <ListGroup.Item key={mission.mission_id}>
                {mission.mission_name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <h1>My Rockets</h1>
          <ListGroup>
            {rockets.filter((rocket) => rocket.reserved === true).map((rocket) => (
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
