import styled, {css} from 'styled-components';

const baseSideCss = css`
    flex-basis: 50%;
    flex-grow: 1;
    height:100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
    padding-top: 90px;
`;

export const LeftSide = styled.div`
    ${baseSideCss}
    background-color: orange;
`;

export const RightSide = styled.div`
    ${baseSideCss}
`;
