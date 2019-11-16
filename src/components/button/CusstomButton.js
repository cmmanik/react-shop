import React from 'react';
import './button.scss'
const CusstomButton = ({children, googleSign, ...otherProps}) => {
    return (
        <button className={`${googleSign ? 'googleSign' : '' } custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default CusstomButton;