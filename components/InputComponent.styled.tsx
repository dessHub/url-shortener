import { Ui } from '@/ui';
import styled from 'styled-components';

const Styled = {
  InputContainer: styled.div`
    position: relative;

    button {
      border-radius: ${Ui.borderRadius}px;
      transition: ease all 0.4s;
      position: absolute;
      cursor: pointer;
      right: 10px;
      top: 7.5px;
      padding: 7.5px 10px;
      outline: unset;
      border: unset;
      max-height: 40px;
      height: 40px;

      img {
        position: relative;
        transition: ease all 0.4s;
        top: 2.5px;
      }

      &:hover {
        filter: brightness(125%);

        img {
          transform: rotate3d(1, 0, 0, 45deg);
        }
      }
    }
  `,

  Input: styled.input<{ placeholderColor?: string }>`
  
    border-radius: ${Ui.borderRadius}px;
    width: 100%;
    padding: 20px 100px 20px 20px;
   
    ${props =>
      props.placeholderColor &&
      `
        &::placeholder {
            color: ${props.placeholderColor}
        }
    `
    }
  `,
};

export default Styled;
