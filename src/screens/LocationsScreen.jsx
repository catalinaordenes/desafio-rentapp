import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Locations from '../components/Locations';
import Search from '../components/Search';


const LocationsScreen = () => {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPrevioustUrl] = useState('');
  const [defaultUrl, setDefaultUrl] = useState('https://rickandmortyapi.com/api/location')
  const [error, setError] = useState(null);

  const clearError = () => {
    setError(false);
  };

  const fetchData = (url) => {
    console.log(url, 'currentUrl')
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
          setLocations([]);
        } else {
          setError(null);
          setLocations(data.results);
          setPrevioustUrl(data.info.prev);
          setNextUrl(data.info.next);
          if (!totalPages) {
            setTotalPages(data.info.pages)
          }
        }
      });
    return
  }

  const handleSearch = (searchTerm) => {
    const searchUrl = `https://rickandmortyapi.com/api/location/?name=${searchTerm}`;
    fetchData(searchUrl);
    setCurrentPage(1); // Resetear la página actual al realizar una búsqueda
  };

  // Cambiar a la página siguiente
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    fetchData(nextUrl)
  };

  // Cambiar a la página anterior
  const previousPage = () => {
    setCurrentPage(currentPage - 1);
    fetchData(previousUrl)
  };


  useEffect(() => {
    fetchData(defaultUrl)
  }, []);


  return (
    <div>
      <Navbar />
      <Search onSearch={handleSearch} clearError={clearError} />
      {error ? (
        <p className="error-message">No se encontraron coincidencias.</p>
      ) : (
        <Locations
          locations={locations}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
          totalPages={totalPages}
        />
      )}
    </div>
  )
}

export default LocationsScreen