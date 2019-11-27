import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(192, 253, 251, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  border-radius: 20px;
  border: solid 2px #124559;
  background-color: #ffffff;
  padding: 20px;
  max-height: 95%;
  min-width: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  img {
    height: 83px;
    width: 229px;
    align-self: center;
  }
`;
