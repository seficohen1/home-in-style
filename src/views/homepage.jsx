import React from 'react';
import Directory from '../components/directory/directory';
// import './hompage.scss';
import { HomePageContainer } from './hompage.styles';

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
