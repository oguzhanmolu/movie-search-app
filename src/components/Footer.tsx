import styled from 'styled-components';
const Footer = () => {
  return (
    <FooterWrapper>
      <a href='https://github.com/oguzhanmolu' target='_blank'>
        <Icon className='fa-brands fa-github fa-flip'></Icon>
      </a>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Icon = styled.i`
  color: white;
  animation-duration: 5s;
  font-size: 2.5rem;

  @media (max-width: 400px) {
    color: black;
  }
`;

export default Footer;
