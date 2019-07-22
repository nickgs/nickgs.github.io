import React from 'react'

// import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'

import styled, {createGlobalStyle} from 'styled-components'
import P5Wrapper from 'react-p5-wrapper';
import { Link } from 'gatsby'

import sketch from '../sketches/sketch1';
import GlobalStyle from '../styles/global-styles';
import NgsMenu from '../components/menu';


const Container = styled.div`
  display: flex;
  height: 100vh;
`
const SideBar = styled.div`
  flex-basis: 50px;
  
  background-color: black; 
  /* padding: 5%;
  padding-top: 5%; */

  @media only screen and (min-width: 321px) {
    /* flex-basis: 83px;
    width: 83px; */
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

const MainContent = styled.div`
  flex-basis: 100%;

  @media only screen and (min-width: 768px) {
    flex-basis: 55%;
  }
  
  overflow: auto;
`

const Article = styled.div`
  margin: 50px;
  h3 {
    font-size: 2em;
  }
`

const MediaZone = styled.div`
  flex-basis: 0%;
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    flex-basis: 45%;
  }
  background-color: #505050;
  /* flex-grow: 1;
  flex-basis: 100%; */
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

const Title = styled.h1`
  font-size: 2em;
  color: whitesmoke;
  background-color: #840015;
  width: 175px;
  padding: 20px;
  text-transform: uppercase;
  height: 2.2em;

  grid-area: 1 / 1 / 4 / 2;
  border-bottom-right-radius: 20px;

  a {
      text-decoration: none;
      color: white;
  }
`

const TopNav = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  height: 300px;
  overflow: hidden;

  img {
   width: 100%;
   grid-area: 1 / 1 / 4 / 4;
  }

  background-color: white;
  border-top: 5px solid #840015;
  padding-bottom: 0px;
  padding-top: 0px;
`
//console.log(p5);


const IndexPage = () => (

  <Container>
    <GlobalStyle/>
    <SideBar>
      <NgsMenu></NgsMenu>
    </SideBar>
    <MainContent>
      <TopNav>
        <img src="https://images.unsplash.com/photo-1506184155123-73f3a6dfc2fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"/>
        <Title><Link to="/">nickgs</Link></Title>
      </TopNav>
      <Article>
        <h3>Title of content</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mauris consequat, rhoncus ligula sit amet, facilisis velit. Integer suscipit sodales orci sed vestibulum. Nam eget dapibus lectus. Vivamus nisi lacus, efficitur eget dictum a, tincidunt sit amet lectus. Aliquam egestas odio felis. Etiam neque ligula, imperdiet eget magna sed, facilisis ullamcorper dolor. Aenean vel ornare arcu, vitae elementum massa. Suspendisse potenti. Vivamus consectetur ullamcorper enim nec pellentesque. Fusce blandit eu mi at mattis. Etiam eu eleifend arcu, quis vehicula odio. Curabitur rhoncus mauris eget orci mollis, ac tristique libero varius. Donec dapibus orci sit amet dictum auctor. Vivamus auctor dapibus enim vel rutrum. Nam id vehicula felis. Proin metus massa, tincidunt quis finibus vitae, tincidunt id neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mauris consequat, rhoncus ligula sit amet, facilisis velit. Integer suscipit sodales orci sed vestibulum. Nam eget dapibus lectus. Vivamus nisi lacus, efficitur eget dictum a, tincidunt sit amet lectus. Aliquam egestas odio felis. Etiam neque ligula, imperdiet eget magna sed, facilisis ullamcorper dolor. Aenean vel ornare arcu, vitae elementum massa. Suspendisse potenti. Vivamus consectetur ullamcorper enim nec pellentesque. Fusce blandit eu mi at mattis. Etiam eu eleifend arcu, quis vehicula odio. Curabitur rhoncus mauris eget orci mollis, ac tristique libero varius. Donec dapibus orci sit amet dictum auctor. Vivamus auctor dapibus enim vel rutrum. Nam id vehicula felis. Proin metus massa, tincidunt quis finibus vitae, tincidunt id neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et mauris consequat, rhoncus ligula sit amet, facilisis velit. Integer suscipit sodales orci sed vestibulum. Nam eget dapibus lectus. Vivamus nisi lacus, efficitur eget dictum a, tincidunt sit amet lectus. Aliquam egestas odio felis. Etiam neque ligula, imperdiet eget magna sed, facilisis ullamcorper dolor. Aenean vel ornare arcu, vitae elementum massa. Suspendisse potenti. Vivamus consectetur ullamcorper enim nec pellentesque. Fusce blandit eu mi at mattis. Etiam eu eleifend arcu, quis vehicula odio. Curabitur rhoncus mauris eget orci mollis, ac tristique libero varius. Donec dapibus orci sit amet dictum auctor. Vivamus auctor dapibus enim vel rutrum. Nam id vehicula felis. Proin metus massa, tincidunt quis finibus vitae, tincidunt id neque.</p>
       </Article>
    </MainContent>
    <MediaZone id="myCanvas">
      <P5Wrapper sketch={sketch}></P5Wrapper>
    </MediaZone>
  </Container>
)

export default IndexPage
