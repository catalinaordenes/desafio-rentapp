import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Characters from '../components/Characters'
import Search from '../components/Search';
import Pagination from '../components/Pagination';


const CharactersScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const [defaultUrl, setDefaultUrl] = useState('https://rickandmortyapi.com/api/character');
  const [error, setError] = useState(null); // Nuevo estado para manejar errores

  const clearError = () => {
    setError(false);
  };

  const fetchData = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.error) { // Si la respuesta contiene un campo "error"
          setError(data.error); // Configura el estado de error
          setCharacters([]); // Borra los personajes anteriores en caso de error
        } else {
          setError(null); // Limpia el estado de error
          setCharacters(data.results);
          setPreviousUrl(data.info.prev);
          setNextUrl(data.info.next);
          if (!totalPages) {
            setTotalPages(data.info.pages);
          }
        }
      });
  }

  const handleSearch = (searchTerm) => {
    const searchUrl = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;
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
        <><Characters
          characters={characters}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
          totalPages={totalPages} /><Pagination
            currentPage={currentPage}
            onNextPage={nextPage}
            onPreviousPage={previousPage}
            totalPages={totalPages} /></>
      )}
    </div>
  )
}

export default CharactersScreen;
