import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './collectionPreve.scss'
const CollectionPreview = ({items, title}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
            {items.filter((item, index) => index < 4)
                .map(({id,...itemProps}) => (
                <CollectionItem key={id} {...itemProps} />
            ))}
            </div>
        </div>
    );
};

export default CollectionPreview;