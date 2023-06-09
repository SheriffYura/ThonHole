import styled from 'styled-components';


export const Wrapper = styled.div`
    & {
        display: flex;
        overflow: scroll-y;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 10px;
        width: 100%;
        padding: 10px;
    }

    & > * {
        flex-basis: 250px;
        flex-grow: 1;
    }

`;
