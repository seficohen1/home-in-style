import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

const selectDirectorySection = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);

export default selectDirectorySection;
