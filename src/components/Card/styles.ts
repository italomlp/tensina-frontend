import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  border: solid 1px #124559;
  max-width: 600px;
  min-width: 200px;
  max-height: 600px;
  min-height: 150px;
`;

export const Header = styled.div`
  padding: 10px;
  border-radius: 5px 5px 0 0;
  border-bottom: solid 1px #124559;
  background-color: #c0fdfb;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;

  h1 {
    font-size: 20px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const Content = styled.div`
  padding: 10px;
  background-color: #fff;
  color: #333;
`;

type ImageType = {
  imageSrc: string;
  imageContainMode: string;
};

export const Image = styled.div`
  height: 267px;
  width: 267px;
  padding-bottom: 10px;
  border-bottom: 1px solid #aaa;
  background-image: ${(props: ImageType) => props.imageSrc || 'none'};
  background-repeat: no-repeat;
  background-size: ${(props: ImageType) => props.imageContainMode || 'contain'};
`;
