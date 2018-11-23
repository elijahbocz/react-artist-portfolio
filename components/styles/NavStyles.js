import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  margin-top: 1.3rem;
  padding: 0;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  letter-spacing: 0.25rem;
  a,
  button {
    padding: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 0.75rem;
    color: #FCFFF5;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    font-size: 1.2rem;
  }
  a:hover {
    color: #91AA9D;
  }
  .active {
    color: #91AA9D;
  }
`;

export default NavStyles;
