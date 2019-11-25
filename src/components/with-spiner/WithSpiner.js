import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './SpnierStyle';

const WithSpiner = (WrapComponent) => {
    const Spiner = ({isLoading, ...otherProps}) => {
        return isLoading ? 
            (<SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>)
             : (
                <WrapComponent {...otherProps} />
            )
    }
    return Spiner;
};

export default WithSpiner;