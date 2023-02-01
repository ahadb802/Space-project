import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import SingleUIProfile from '../../SingleUIProfile/SingleUIProfile';

function Profile() {
  const rocketList = useSelector((state) => state.rocketData.rockets);
  return (
    <section className="wrapper-profile">
      {/* ADD you Mission data here Data */}
      <div className="Rocket-Wrapper">
        <h2 className="Title">My Missions</h2>
        <ListGroup>
          {rocketList?.filter((rocket) => rocket.reserved === true).map((rocket) => (
            <SingleUIProfile key={rocket.id} id={rocket.id} name={rocket.name} />
          ))}
          {
            rocketList?.filter((rocket) => rocket.reserved === true).length === 0
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
