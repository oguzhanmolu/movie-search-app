import styled from 'styled-components';
import ResultItem from './ResultItem';
import { MovieAPIDataProps, MovieData } from '../Main';

interface ResultListProps {
  movieData: MovieAPIDataProps | null;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSelectedMovie: React.Dispatch<React.SetStateAction<MovieData | undefined>>;
}

// Search result list below search bar
const ResultList = ({
  movieData,
  setSearchValue,
  setSelectedMovie,
}: ResultListProps) => {
  // Highlight clicked movie
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Find selected movie
    const selectedMovie = movieData?.Search.find(
      (movie) => movie.imdbID === e.currentTarget.id
    );

    // Set values
    setSelectedMovie(selectedMovie);
    setSearchValue('');
  };

  const movieItems = movieData?.Search?.map((movie) => {
    return (
      <ResultItem
        key={movie.imdbID}
        id={movie.imdbID}
        movieData={movie}
        onClickAction={handleOnClick}
      />
    );
  });

  return <ResultWrapper>{movieItems}</ResultWrapper>;
};

const ResultWrapper = styled.div`
  height: 60vh;
  width: auto;
  min-width: 30vw;
  margin-top: 10px;
  padding: 0 25px 0 25px;
  overflow-y: auto;

  @media (max-width: 400px) {
    height: auto;
  }
`;

export default ResultList;
