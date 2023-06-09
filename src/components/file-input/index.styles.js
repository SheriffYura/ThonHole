import styled from 'styled-components';


export const FileInputWrapper = styled.div`
    & {
        border-radius: 8px;
        border: 0.5px solid gray;
        max-width: 300px;
        overflow: hidden;
        position: relative;
    }
`;

export const FileInputButton = styled.input`
    & {
       display:none;
    }
`;


export const Image = styled.div`
    & {
        height: 250px;
        background-image: url(${({imageUrl}) => imageUrl});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

export const ButtonWrapper = styled.div`
    & {
        position: absolute;
        bottom:0;
        width: 100%;
        padding: 10px;
        text-align: center;
    }
`;