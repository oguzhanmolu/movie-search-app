import styled from 'styled-components';
import { MovieData } from './Main';
import Image from './elements/Image';
import Text from './elements/Text';

interface SelectedMovieProps {
  selectedMovie: MovieData | undefined;
}

const MovieItem = ({ selectedMovie }: SelectedMovieProps) => {
  // Destructured values
  const {
    Title = '',
    Year = '',
    imdbID = '',
    Poster = '',
  } = selectedMovie ?? {};

  return (
    <ItemWrapper>
      <Text fontSize='2.75rem' fontWeight='bold' text={Title} />

      <Text fontSize='2.25rem' color='#A020F0' fontWeight='bold' text={Year} />

      <Link target='_blank' href={`https://www.imdb.com/title/${imdbID}/`}>
        <Image src={Poster} alt={Title} height='500px' width='auto' />
      </Link>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: fixed;
  margin-top: 75px;
  text-align: center;
`;

const Link = styled.a`
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  &:hover {
    scale: 1.05;
  }
`;

export default MovieItem;
