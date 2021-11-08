import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import fetchMissions from '../api';
import './Mission.css';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchMissions()), []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td className="mission-name-cell">{mission.mission_name}</td>
            <td className="mission-description-cell">{mission.description}</td>
            <td className="mission-member-cell"><span className="mission-member-span">Not A Member</span></td>
            <td className="button-cell"><Button variant="outline-secondary">Join Mission</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Missions;
