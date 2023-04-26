import styled from 'styled-components';

type ImageProps = {
  src: string;
  alt: string;
  height: string;
  width?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, height, width }) => {
  return <ImageItem src={src} alt={alt} height={height} width={width} />;
};

const ImageItem = styled.img<ImageProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 10px;
`;

Image.defaultProps = {
  width: 'auto',
};

export default Image;
