import styled from 'styled-components';

export const StyledImage = styled.div`
  height: 90vh;
  aspect-ratio: 1 / 1;
  float: right;
  overflow: hidden;
  border-radius: 500px;
  margin-right: -230px;
  margin-top: -130px;

  background-image: url("./images/York.png");

  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (max-width: 1300px) {
    height: 100%;
  }
`
