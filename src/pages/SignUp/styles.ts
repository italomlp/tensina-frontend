import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 20px;
  }

  form {
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }

  input {
    margin-bottom: 26px;
  }

  button {
    margin-bottom: 20px;
  }
`;

export const BottomLine = styled.p`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;

  a {
    color: #124559;
  }
`;
