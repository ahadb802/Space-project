import React from 'react';
import { useSelector } from 'react-redux';
import SingleRocket from '../../singlerocket/SingleRocket';

const Rocket = () => {
  // get rockets data from the store
  const rocketList = useSelector((state) => state.rocketData.rockets);

  return (
    <section>
      {rocketList?.map((item2) => (
        <SingleRocket
          id={item2.id}
          key={item2.id}
          name={item2.name}
          image={item2.image}
          description={item2.description}
          reserved={item2.reserved}
        />
      ))}
    </section>
  );
};
export default Rocket;
