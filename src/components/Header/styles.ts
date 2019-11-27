import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(192, 253, 251, 0.5);
  padding: 0 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      height: 60px;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  &:hover {
    cursor: pointer;
  }

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #000000;
    }
    span {
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: rgba(0, 0, 0, 0.65);
      display: block;
      margin-top: 2px;
      font-size: 12px;
    }
  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
