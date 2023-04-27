import styled from 'styled-components';
import ResultItem from './ResultItem';
import { MovieAPIDataProps, MovieData } from '../Main';

interface ResultListProps {
  movieData: MovieAPIDataProps | null;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSelectedMovie: React.Dispatch<React.SetStateAction<MovieData | undefined>>;
}

const ResultList = ({
  movieData,
  setSearchValue,
  setSelectedMovie,
}: ResultListProps) => {
  // Handle select movie and show it
  const handleSelectedMovie = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedMovie = movieData?.Search.find(
      (movie) => movie.imdbID === e.currentTarget.id
    );

    setSelectedMovie(selectedMovie);
    setSearchValue('');
  };

  // List search results
  const movieItems = movieData?.Search?.map((movie) => {
    return (
      <ResultItem
        key={movie.imdbID}
        id={movie.imdbID}
        movieData={movie}
        onClickAction={handleSelectedMovie}
      />
    );
  });

  return <ResultWrapper>{movieItems}</ResultWrapper>;
};

const ResultWrapper = styled.div`
  height: 60vh;
  min-width: 30vw;
  margin-top: 10px;
  padding: 0 25px 0 25px;
  overflow-y: auto;
`;

export default ResultList;
