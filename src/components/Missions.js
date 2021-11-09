import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import fetchMissions from '../api';
import { joinMission } from '../redux/missions/missions';
import './Mission.css';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchMissions()), []);

  return (
    <div className="missions-table">
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
              <td className="mission-member-cell">
                <span
                  className={mission.reserved ? 'mission-member-span-active' : 'mission-member-span'}
                >
                  {mission.reserved ? 'Active Member' : 'Not A Member'}
                </span>
              </td>
              <td className="button-cell">
                <Button
                  onClick={() => { dispatch(joinMission(mission.mission_id)); }}
                  variant={mission.reserved ? 'outline-danger' : 'outline-secondary'}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}

                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>

  );
};

export default Missions;
