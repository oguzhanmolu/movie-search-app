import styled from 'styled-components';

type TextProps = {
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  color?: string;
  text: string;
};

const Text: React.FC<TextProps> = ({
  fontSize,
  fontFamily,
  fontWeight,
  color,
  text,
}) => {
  return (
    <TextItem
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      color={color}
      text={text}
    >
      {text}
    </TextItem>
  );
};

Text.defaultProps = {
  fontSize: '1rem',
  fontFamily: 'Limelight',
  fontWeight: 'normal',
  color: 'black',
};

const TextItem = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export default Text;
