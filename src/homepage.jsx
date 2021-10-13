import React from 'react';
import './hompage.scss';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">BEDROOM</h1>
            <span className="subtitle">SEE MORE</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">BATH</h1>
            <span className="subtitle">SEE MORE</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">KITCHEN</h1>
            <span className="subtitle">SEE MORE</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">OUTDOOR</h1>
            <span className="subtitle">SEE MORE</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SALON & MORE</h1>
            <span className="subtitle">SEE MORE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
