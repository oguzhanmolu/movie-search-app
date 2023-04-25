import styled from 'styled-components';
import ResultList from './SearchResult/ResultList';
import { useEffect, useState } from 'react';

interface MovieData {
  Search: {
    imdbID: string;
    Poster: string;
    Title: string;
    Year: string;
  }[];
}

const API_KEY = 'e55d364b';

const Main = () => {
  // Hooks
  const [searchValue, setSearchValue] = useState<string>('');
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  // Fetch movie data whenever input values changes
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const endpoint = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;
        const response = await fetch(endpoint);
        const data = (await response.json()) as MovieData;
        setMovieData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [searchValue]);

  return (
    <MainWrapper>
      <Input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type='text'
        placeholder='Type Movie Title ...'
      />
      <ResultList />
    </MainWrapper>
  );
};

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
