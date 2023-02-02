import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import SingleUIProfile from '../../SingleUIProfile/SingleUIProfile';

function Profile() {
  const rocketList = useSelector((state) => state.rocketData.rockets);
  const missionsList = useSelector((state) => state.missions.missions);

  return (
    <section className="wrapper-profile">
      <div className="Rocket-Wrapper">
        <h2 className="Title">My Missions</h2>
        <ListGroup>
          {missionsList?.filter((mission) => mission.joined === true).map((mission) => (
            <SingleUIProfile
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
            />
          ))}
          {
            missionsList?.filter((mission) => mission.joined === true).length === 0
            && <ListGroup.Item>No reserved Mission</ListGroup.Item>
          }
        </ListGroup>
      </div>
      {/* Rocket Data */}
      <div className="Rocket-Wrapper">
        <h2 className="Title">My Rockets</h2>
        <ListGroup>
          {rocketList?.filter((rocket) => rocket.reserved === true).map((rocket) => (
            <SingleUIProfile key={rocket.id} id={rocket.id} name={rocket.name} />
          ))}
          {
            rocketList?.filter((rocket) => rocket.reserved === true).length === 0
            && <ListGroup.Item>No reserved Rockets</ListGroup.Item>
          }
        </ListGroup>
      </div>
    </section>
  );
}

export default Profile;
