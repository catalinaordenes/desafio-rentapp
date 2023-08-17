import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DetailEpisodeScreen = () => {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then(response => response.json())
      .then(data => {
        setEpisode(data)
      });
  }, [episodeId])

  console.log({ episode })
  if (!episode) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Episode-detail'>
      <Navbar />
      <div className="card-container-detail">
        <div className="card" key={episode.id}>
          <div className="card-content">
            <h3 className="card-title">{episode.name}</h3>
            <p>Air Date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailEpisodeScreen