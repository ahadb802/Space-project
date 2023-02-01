import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Mission.css';
import { toggleJoin } from '../../redux/Mission-state/Mission';

export default function Mission() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  return (
    <div className="table-container">
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
          {missions.map((mission, i) => (
            <tr key={mission.mission_id} className={i % 2 === 0 ? 'pair' : 'odd'}>
              <td className="mission-name">{mission.mission_name}</td>
              <td className="description">{mission.description}</td>
              <td>
                <p className={`${mission.joined ? 'active' : 'inactive'} member`}>
                  {mission.joined ? 'Active member' : 'NOT A MEMBER'}
                </p>
              </td>
              <td>
                <div
                  aria-label="join or leave mission"
                  className={`${mission.joined ? 'leave' : 'join'} button`}
                  onClick={() => dispatch(toggleJoin(mission.mission_id))}
                  aria-hidden="true"
                >
                  {mission.joined ? 'Leave Mission' : 'Join Mission'}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
