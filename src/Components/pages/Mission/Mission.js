import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/Mission-state/Mission';
import './Mission.css';

export default function Mission() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch(Mission);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <table className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_name}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>Member</td>
              <td>Leave mission</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
