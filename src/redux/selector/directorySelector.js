import {createSelector} from 'reselect';

const directorySelect = state => state.directory;

export const selectDirectory = createSelector(
    [directorySelect],
    directory => directory.sections
)
