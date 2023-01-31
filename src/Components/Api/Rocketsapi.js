const Rockets = async () => {
  const resp = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await resp.json();
  const rockets = [];
  data.forEach((element) => {
    rockets.push({
      id: element.rocket_id,
      name: element.rocket_name,
      description: element.description,
      image: element.flickr_images[0],
    });
  });
  return rockets;
};

export default Rockets;
