import React from 'react';
import styled from 'styled-components';


export const Input = styled.input`
    & {
        border: 0.3px solid gray;
        border-radius: 8px;
        padding: 7px;
        outline: none;
        font-size: 18px;
        display: block;
        margin-bottom: 15px;
    }
`

export const InputLabel = styled.p`
    & {
        font-weight: 600;
        margin-bottom: 5px;
        font-size: 14px;
    }
`;
