import React from 'react';
import {Button as StyledButton} from './index.styles.js';

export const Button = ({children}) => {
    return (<StyledButton>
            {children}
        </StyledButton>);
};