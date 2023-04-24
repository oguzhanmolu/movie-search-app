import styled from 'styled-components';
import Image from './elements/Image';

import mainBackgroundImage from '../assets/background.svg';
const Main = () => {
  return (
    <MainWrapper>
      {/* <Image
        src={mainBackgroundImage}
        alt='Background wave image'
        height='100vh'
        width='100vw'
      /> */}
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url(${mainBackgroundImage});
`;

export default Main;
