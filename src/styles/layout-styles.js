import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
`
export const SideBar = styled.div`
  flex-basis: 50px;
  
  background-color: black; 
  /* padding: 5%;
  padding-top: 5%; */

  @media only screen and (min-width: 321px) {
    /*flex-basis: 83px;*/

    flex-basis: 103px;
    max-width: 68px;
  }

  ul {
    color: whitesmoke;
    margin: 0px;
  }

  li {
    list-style: none;
    text-transform: uppercase;
    color: white;
  }

  .bm-item-list {
    display: flex;
    flex-direction: column;
    
    a {
      color: white;
      text-decoration: none;
      line-height: 2em;
    }
  }
`



export const Article = styled.div`
  margin: 20px;

  @media only screen and (min-width: 768px) {
    margin: 50px;
  }

  h3 {
    font-size: 2em;
  }
`


export const BigHello = styled.h1`
    font-size: 2.5em;

    @media only screen and (min-width: 768px) {
        font-size: 3.5em;
    }
`;

export const MediaZone = styled.div`
  flex-basis: 0%;
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    flex-basis: 45%;
  }
  background-color: #505050;
  flex-grow: 1;
  flex-basis: 100%;
  /* flex: 0 0 auto; */
  /*background: url(https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80) top left no-repeat;
  background-size: cover;
  */
  /* width: 40%; */
 

  canvas {
    width: 100%;
    height: 100%;
  }
`

export const Title = styled.h1`
  font-size: 2em;
  color: whitesmoke;
  background-color: #840015;
  width: 175px;
  padding: 20px;
  text-transform: uppercase;
  height: 2.2em;

  grid-area: 1 / 1 / 4 / 2;
  /* border-bottom-right-radius: 20px; */

  a {
      text-decoration: none;
      color: white;
  }
`

export const TopNav = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;

  img {
   width: 100%;
   grid-area: 1 / 1 / 4 / 4;
  }

  border-top: 5px solid #840015;
  padding-bottom: 0px;
  padding-top: 0px;
`

export const FullVideoStyles = styled.div`
  video {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: -1;
  }
`

export const MainContent = styled.div`
  flex-basis: 100%;

  @media only screen and (min-width: 768px) {
    flex-basis: 55%;
  }
  
  overflow: auto;
`