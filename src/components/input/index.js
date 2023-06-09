import React from 'react';
import {Input as StyledInput, InputLabel} from './index.styles.js';

/**
 * @view
 */
export const Input = ({label, ...props}) => {
    return (
        <label>
            {label && <InputLabel>{label}</InputLabel>}
            <StyledInput {...props} />
        </label>
    );
};