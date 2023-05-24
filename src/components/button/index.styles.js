import styled from 'styled-components';

export const Button = styled.button`
   & {
    border: none;
    padding: 5px 15px;
    border-radius: 8px;
    transition: all 0.5s ease;
    font-size: 22px;
    background-color: #eb5252;
    color: #fff;
    cursor: pointer;
   }

   &:active {
    transform: scale(0.9);
   }

   &:hover {
    background-color: #d13636;
   }
`;