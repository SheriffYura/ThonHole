import React from 'react';
import {Button as StyledButton} from './index.styles.js';

/**
 * @view - 'primary' | 'secondary'
 */
export const Button = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
           {children}
        </StyledButton>
    );
};