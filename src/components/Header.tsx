import styled from 'styled-components';
import headerIcon from '../assets/header-icon.png';
// Reusable elements
import Image from './elements/Image';
import Text from './elements/Text';

const Header = () => {
  return (
    <HeaderWrapper>
      <IconWrapper>
        <Image src={headerIcon} alt='Movie icon' height='50px' />

        <Text fontSize='2rem' color='#A020F0' text='MovieDb' />
      </IconWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.section`
  display: flex;
  padding: 10px;

  @media (max-width: 400px) {
    justify-content: center;
    margin-bottom: 25px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

export default Header;
