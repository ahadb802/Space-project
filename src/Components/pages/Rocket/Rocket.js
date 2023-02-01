import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleRocket from '../../singlerocket/SingleRocket';
import { Alldata } from '../../redux/Rocket-state/Rocket';

const Rocket = () => {
  // get rockets data from the store
  const rocketList = useSelector((state) => state.rockets);
  const list = Object.entries(rocketList).map((item) => item[1].map((item2) => (
    <SingleRocket
      id={item2.id}
      key={item2.id}
      name={item2.name}
      image={item2.image}
      description={item2.description}
      reserved={item2.reserved}
    />
  )));
  const send = useDispatch();

  useEffect(() => {
    send(Alldata());
  }, [send]);
  return (
    <section>
      {list}
    </section>
  );
};
export default Rocket;
