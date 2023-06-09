import styled from 'styled-components';


export const ModalContent = styled.div`
    & {
        padding: 20px;
        border-radius: 8px;
        position: absolute;
        background-color: #fff;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        min-width: 400px;
        min-height: 30%;
        z-index: 999;
        box-shadow: 10px 10px 32px 15px rgba(0,0,0,0.5);
    }
`;

export const ModalWrapper = styled.div`
    & {
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        position: fixed;
    }
`;

export const ModalBackdrop = styled.div`
    & {
        position: absolute;
        display: block;
        background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3));
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 998;
    }
`;

export const ModalHeader = styled.div`
    & {
        width: 100%;
        height: 32px;
        display: flex;
        justify-content: flex-end;
    }

    & svg {
        cursor: pointer;    
    }
`;