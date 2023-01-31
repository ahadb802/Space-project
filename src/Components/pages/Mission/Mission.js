import React, { useEffect } from 'react';

const fetchMissions = async (url) => {
  const results = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);
  console.log(results);
  return results;
};

export default function Mission() {
  useEffect(() => {
    fetchMissions('https://api.spacexdata.com/v3/missions');
  }, []);

  return (
    <div>Mission</div>
  );
}
