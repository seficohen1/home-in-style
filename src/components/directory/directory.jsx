import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'BEDROOM',
          image: 'https://ibb.co/2ZVRY8f',
          id: 1,
        },
        {
          title: 'BATH',
          image: 'https://i.ibb.co/x5NyWL8/bathroom.jpg',
          id: 2,
        },
        {
          title: 'KITCHEN',
          image: 'https://ibb.co/2FV02wp',
          id: 3,
        },
        {
          title: 'OUTDOOR & MORE',
          image: 'https://ibb.co/JpbHYZ3',
          id: 4,
        },
        {
          title: 'LIVING ROOM',
          image: 'https://ibb.co/VL6fX9F',
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, image, id }) => {
          console.log(title, image, id);
          return <MenuItem key={id} title={title} image={image} />;
        })}
      </div>
    );
  }
}

export default Directory;
