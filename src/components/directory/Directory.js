import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import {connect} from 'react-redux'
import {createStructuredSelector } from 'reselect';
import { selectDirectory } from '../../redux/selector/directorySelector';
const  Directory = ({sections}) =>  (
  
      <div className="directory-menu">
          {sections.map(({id , ...sectionProps}) => (
              <MenuItem t key={id} {...sectionProps} />
          ))}
      </div>
);

const mapStateToProps = createStructuredSelector ({
  sections:selectDirectory
})

export default connect(mapStateToProps) (Directory);