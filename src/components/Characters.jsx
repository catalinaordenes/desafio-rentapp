import React from 'react';


const Characters = ({ characters }) => {
    return (
        <div className='Characters'>
            <div className="card-container">
                {characters.map(character => (
                    <div className="card" key={character.id} onClick={() => window.location = `/detailcharacter/${character.id}`}>
                        <img src={character.image} alt={character.name} className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">{character.name}</h3>
                            <p>Status: {character.status}</p>
                            <p>Species: {character.species}</p>
                            <p>Origin: {character.origin.name}</p>
                        </div>
                    </div>
                ))}
            </div>



        </div>
    );
}

export default Characters;