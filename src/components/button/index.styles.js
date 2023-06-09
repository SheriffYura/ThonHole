import styled, {css} from 'styled-components';


const views = {
   primary: {
      regular: css`
         background-color: #eb5252;
         color: #fff;
      `,
      hover: css`
         background-color: #d13636; 
      `
   },
   secondary: {
      regular: css`
         background-color: #fff;
         color: #3d3d3d;
      `,
      hover: css`
         background-color: #ccc;
      `
   }
}


export const Button = styled.button`
   & {
      border: ${({withBorder}) => withBorder ? '0.5px solid gray' : 'none'};
      padding: 5px 15px;
      border-radius: 8px;
      transition: all 0.5s ease;
      font-size: 22px;
      cursor: pointer;
      ${
         ({view = 'primary'}) => views[view].regular
      }
   }

   &:not(:last-child) {
      margin-right: 10px;
   }

   &:active {
      transform: scale(0.9);
   }

   &:hover {
      ${
         ({view = 'primary'}) => views[view].hover
      }
   }
`;