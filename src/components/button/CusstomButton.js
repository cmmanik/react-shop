import React from 'react';
import './button.scss'
const CusstomButton = ({children, googleSign, inverted, ...otherProps}) => {
    return (
        <button className={` ${inverted ? 'inverted' : '' } ${googleSign ? 'googleSign' : '' } custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default CusstomButton;