import styled from 'styled-components';
import Image from '../elements/Image';
import Text from '../elements/Text';
import { MovieData } from '../Main';
interface ResultItemProps {
  movieData: MovieData;
  id: string;
  onClickAction: (e: React.MouseEvent<HTMLDivElement>) => void;
}

// Search result item
const ResultItem = ({ movieData, id, onClickAction }: ResultItemProps) => {
  return (
    <ItemWrapper id={id} onClick={onClickAction}>
      <Image
        src={movieData.Poster}
        alt={`${movieData.Title} poster`}
        height='200px'
        width='135px'
      />

      <TextWrapper>
        <Text fontSize='1.75rem' fontWeight='bold' text={movieData.Title} />

        <Text fontSize='1.75rem' color='#A020F0' text={movieData.Year} />
      </TextWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  margin-top: 25px;
  cursor: pointer;

  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

const TextWrapper = styled.div`
  margin-left: 10px;
`;

export default ResultItem;
