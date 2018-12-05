import styled from 'styled-components';

const MasonryDiv = styled.div`
  min-height: 1000px;
  
  .columns {
    column-width: 320px;
    column-gap: 15px;
    width: 90%;
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

  @media screen and (max-width: 750px) {
    margin: 1rem;
    .columns {
      column-gap: 0px;
      margin: 0;
    }
    .columns figure {
      margin: 0;
      width: 100%;
    }
    .columns figure {
      border: none;
      box-shadow: none;
      padding-bottom: 0;
      margin: 0;
    }
    .columns figure img {
      margin-bottom: 0;
    }
  }
`;

export default MasonryDiv;