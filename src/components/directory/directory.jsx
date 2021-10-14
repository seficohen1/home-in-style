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
          image:
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80',
          id: 1,
          linkUrl: '',
        },
        {
          title: 'BATHROOM',
          image:
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'KITCHEN',
          image:
            'https://images.unsplash.com/photo-1596205250168-c3583813eea0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'OUTDOOR & MORE',
          image:
            'https://images.unsplash.com/photo-1585917641362-9fbb6fcfc371?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1207&q=80',
          id: 4,
          size: 'large',
          linkUrl: '',
        },
        {
          title: 'LIVING ROOM',
          image:
            'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
          id: 5,
          size: 'large',
          linkUrl: '',
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...restOfProp }) => {
          return <MenuItem key={id} {...restOfProp} />;
        })}
      </div>
    );
  }
}

export default Directory;
