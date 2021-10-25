import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import { connect } from 'react-redux';
import selectDirectorySection from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...restOfProp }) => {
        return <MenuItem key={id} {...restOfProp} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
