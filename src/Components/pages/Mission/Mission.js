import React from 'react';
import { useSelector } from 'react-redux';
import './Mission.css';

export default function Mission() {
  const missions = useSelector((state) => state.missions.missions);

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
            <tr key={mission.mission_name} className={i % 2 === 0 ? 'pair' : 'odd'}>
              <td className="mission-name">{mission.mission_name}</td>
              <td className="description">{mission.description}</td>
              <td>
                <p className={`${i % 2 === 0 ? 'active' : 'inactive'} member`}>
                  {i % 2 === 0 ? 'Active member' : 'NOT A MEMBER'}
                </p>
              </td>
              <td>
                <div aria-label="join or leave mission" className={`${i % 2 === 0 ? 'leave' : 'join'} button`}>
                  {i % 2 === 0 ? 'Leave Mission' : 'Join Mission'}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
