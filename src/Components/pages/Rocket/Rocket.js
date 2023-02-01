import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleRocket from '../../singlerocket/SingleRocket';
import { Alldata } from '../../redux/Rocket-state/Rocket';

const Rocket = () => {
  // get rockets data from the store
  const rocketList = useSelector((state) => state.rockets);
  const send = useDispatch();

  useEffect(() => {
    send(Alldata());
  }, [send]);

  return (
    <section>
      {rocketList.map((item) => (
        <SingleRocket
          id={item.id}
          key={item.id}
          name={item.name}
          image={item.image}
          description={item.description}
        />
      ))}
    </section>
  );
};
export default Rocket;
