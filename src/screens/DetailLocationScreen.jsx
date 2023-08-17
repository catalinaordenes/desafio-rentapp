import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DetailLocationScreen = () => {
  const { locationId } = useParams()
  const [location, setLocation] = useState(null)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/${locationId}`)
      .then(response => response.json())
      .then(data => {
        setLocation(data)
      });
  }, [locationId])

  console.log({ location })
  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Location-detail'>
      <Navbar />
      <div className="card-container-detail">
        <div className="card" key={location.id}>
          <div className="card-content">
            <h3 className="card-title">{location.name}</h3>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
            <p>Created: {location.created}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLocationScreen