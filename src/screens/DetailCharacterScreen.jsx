import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';

const DetailCharacterScreen = () => {
  const { characterId } = useParams()
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(response => response.json())
      .then(data => {
        setCharacter(data)
      });
  }, [characterId])

  console.log({ character })
  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Character-detail'>
      <Navbar />
      <div className="card-container-detail">
        <div className="card" key={character.id}>
          <img src={character.image} alt={character.name} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Specie: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCharacterScreen