import React from 'react';
import Pagination from './Pagination';

const Locations = ({ locations, currentPage, nextPage, previousPage, totalPages }) => {
    console.log(locations, 'locaciones')
    return (
        <div className='Locations'>
            <div className="card-container-section">
                {locations.map(location => (
                    <div className="card-section" key={location.id} onClick={() => window.location = `/detaillocation/${location.id}`}>
                        <div className="card-content-section">
                            <h3 className="card-title">{location.name}</h3>
                            <p>Type: {location.type}</p>
                            <p>Dimension: {location.dimension}</p>

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

export default Locations;