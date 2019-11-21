import React from 'react';
import {connect}from 'react-redux'
import CollectionPreview from './../collection-preview/CollectionPreview'
import {createStructuredSelector} from 'reselect'
import { selectCollectionPreview } from '../../redux/selector/shopSelector';
const CollectionOverView = ({collections}) => {
    return (
        <div className="collection-overview">
            {collections.map(({id, items, title}) => (
                <CollectionPreview key={id} items={items} title={title} />
            ))}
            
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionPreview
  })
export default connect(mapStateToProps)(CollectionOverView);
