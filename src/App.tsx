import styled from 'styled-components';
// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import mainBackgroundImage from './assets/background.svg';

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
      <BackgroundImage />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const BackgroundImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${mainBackgroundImage});
  background-repeat: repeat-x;
  background-size: cover;

  @media (max-width: 400px) {
    background-image: none;
  }
`;

export default App;
