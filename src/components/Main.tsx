import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ResultList from './SearchResult/ResultList';
import MovieItem from './MovieItem';

export interface MovieData {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

export interface MovieAPIDataProps {
  Search: MovieData[];
}

const API_KEY = 'e55d364b';

const Main = () => {
  // Hooks
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedMovie, setSelectedMovie] = useState<any>();
  const [movieAPIData, setMovieAPIData] = useState<MovieAPIDataProps | null>(
    null
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setSelectedMovie('');
  };

  // Fetch movie data whenever input values changes
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const endpoint = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
        const response = await fetch(endpoint);
        const data = (await response.json()) as MovieAPIDataProps;
        setMovieAPIData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [searchValue]);

  return (
    <MainWrapper>
      <Input
        onChange={(e) => handleInputChange(e)}
        value={searchValue}
        type='text'
        placeholder='Type Movie Title ...'
      />

      <MovieItem selectedMovie={selectedMovie} />

      <ResultList
        movieData={movieAPIData}
        setSearchValue={setSearchValue}
        setSelectedMovie={setSelectedMovie}
      />
    </MainWrapper>
  );
};

// Styles
const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const Input = styled.input`
  padding: 5px;
  border-style: none;
  border-bottom: 2px solid black;
  font-size: 1.5rem;
  text-align: center;

  &::placeholder {
    opacity: 1;
  }
`;

export default Main;
