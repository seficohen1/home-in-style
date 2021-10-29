import React from 'react';
import Directory from '../components/directory/directory';
// import './hompage.scss';
// import { HomePageContainer } from './hompage.styles';
import styled from 'style-component';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
