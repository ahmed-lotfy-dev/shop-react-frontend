import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 388px) {
      ${props}
    }
  `;
};

// import { css } from "styled-components";

// export const mobile = (props) => {
//   return css`
//     @media only screen and (max-width: 380px) {
//       ${props}
//     }
//   `;
// };
