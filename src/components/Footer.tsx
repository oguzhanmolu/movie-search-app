import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <a href='https://github.com/oguzhanmolu' target='_blank'>
        <Icon className='fa-brands fa-github fa-beat-fade'></Icon>
      </a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #a020f0;
`;

const Icon = styled.i`
  color: white;
  animation-duration: 10s;
  font-size: 2.5rem;
`;

export default Footer;
