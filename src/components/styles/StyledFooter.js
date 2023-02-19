import styled from 'styled-components';

export const StyledFooter = styled.footer`
  border-top: 1px solid #D8D8D8;
  background-color: #FAFAFA;
  height: 180px;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;

  ul{
    position: relative;
    margin-left: 23.6%;
    margin-top: 70px;
	}

  li {
    display: inline-block;
    margin-right: 20px;
    font-size: 16px;
	}

  a {
  text-decoration: none;
  color: #696969;
	}

  a:hover {
    color: #000;
    border-bottom: 1px solid black;
    transition-property: color, border-bottom;
    transition-duration: 0.4s;
  }


@media screen and (max-width: 770px) {
  ul {
    width: 30%;
    margin-left: 40%;
    display: flex;
    justify-content:space-around;
    margin-top: 70px;
  }
}
`
