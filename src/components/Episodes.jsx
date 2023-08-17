import React from 'react';
import Pagination from './Pagination';

const Episodes = ({ episodes, currentPage, nextPage, previousPage, totalPages }) => {
    return (
        <div className='Episodes'>
            <div className="card-container-section">
                {episodes.map(episode => (
                    <div className="card-section" key={episode.id} onClick={() => window.location = `/detailepisode/${episode.id}`}>
                        <div className="card-content-section">
                            <h3 className="card-title">{episode.name}</h3>
                            <p>Episode: {episode.episode}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                onNextPage={nextPage}
                onPreviousPage={previousPage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Episodes;