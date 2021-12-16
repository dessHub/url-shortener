import styled from 'styled-components';
import helpers from '@/helpers/ui';
import { Breakpoints, Typography, Ui } from '@/ui';

const Styled = {
  Container: styled.div`
    padding: 2rem 1rem;
  `,
  Row: styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: ${Breakpoints.sm}) {
       flex-direction: column;
    }

    ${helpers}
  `,
  Column: styled.div`
    display: flex;

    ${helpers}
  `,
  Button: styled.button`
  border-radius: ${Ui.borderRadius}px;
    
    ${helpers}
  `,
  Text: styled.span`
    font-family: ${Typography.fontPrimary};
    font-size: 20px;

    ${helpers}
  `,
};

export default Styled;
