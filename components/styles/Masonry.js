import styled from 'styled-components';

const MasonryDiv = styled.div`
  margin: auto;
  padding: 0 3rem;
  
  .columns {
    column-width: 320px;
    column-gap: 15px;
    width: 100%;
    max-width: 1100px;
    margin: auto;
  }

  .columns figure {
    margin: 0 2px 15px;
    transition: opacity 0.4s ease-in-out;
    display: inline-block;
    column-break-inside: avoid;
  }

  .columns figure img {
    width: 100%;
    height: auto;
  }

  .columns figure figcaption {
    font-size: 0.9rem;
    color: #444;
    line-height: 1.5;
  }

  .columns small {
    font-size: 1rem;
    float: right;
    text-transform: uppercase;
    color: #aaa;
  }

  .columns small a {
    color: #666;
    text-decoration: none;
    transition: 0.4s color;
  }
  @media (max-width: 1300px) {
    padding: 1rem;
  }

  @media (max-width: 750px) {
    margin: 0;
    padding: 0;

    .columns {
      column-gap: 0px;
      margin: 0;
      padding: 0;
    }
    .columns figure {
      margin: 0;
      width: 100%;
    }
    .columns figure {
      border: none;
      box-shadow: none;
      padding-bottom: 0.5rem;
      margin: 0;
    }
    .columns figure img {
      margin-bottom: 0;
    }
  }
`;

export default MasonryDiv;