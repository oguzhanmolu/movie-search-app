import styled from 'styled-components';
import ResultItem from './ResultItem';
import { MovieData } from '../Main';

interface ResultListProps {
  movieData: MovieData | null;
}

// Search result list below search bar
const ResultList = ({ movieData }: ResultListProps) => {
  const handleOnClick = (e: any) => {
    const filmID: string = e.currentTarget.id;
    console.log(filmID);
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
  height: 57.5vh;
  width: auto;
  min-width: 30vw;
  margin-top: 10px;
  padding: 0 25px 0 25px;
  overflow-y: auto;
`;

export default ResultList;
