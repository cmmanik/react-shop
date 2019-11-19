import React from 'react';
import './collectionItem.scss'
import CusstomButton from '../button/CusstomButton';
import { connect } from 'react-redux';
import { addCardItem } from '../../redux/actions/userAction';

const CollectionItem = ({item, addCardItem}) => {
    const {name, imageUrl, price} = item;
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CusstomButton onClick={() =>addCardItem(item)} inverted>Add to Cart</CusstomButton>
        </div>
    );
};

const mapDishpatchToProps = dispatch => ({
    addCardItem:item => dispatch(addCardItem(item))
})

export default connect(null, mapDishpatchToProps) (CollectionItem);