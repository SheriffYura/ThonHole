import styled from 'styled-components';



export const Wrapper = styled.div`
    & {
        cursor:pointer;
        margin: 10px;
        padding: 10px;
        max-width: 250px;
        box-shadow: 5px 5px 7px 7px rgba(0,0,0,0.2);
        border-radius: 8px;
        border: 0.5px solid rgba(0,0,0,0.4);
        background: #fff;
        transition:all 0.3s ease-in-out;
    }

    &:hover {
        transform: scale(0.97);
    }
`;

export const Title = styled.div`
    & {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 5px;
    }
`;

export const Description = styled.div``;

export const Image = styled.img`
    & {
        background-image: url(${({src}) => src});
        background-repeat: no-repeat;
        background-size: cover;
        display: block;
        margin: 5px auto;
        max-width: 100%;
        width: auto;
        max-height:200px;
    }
`;