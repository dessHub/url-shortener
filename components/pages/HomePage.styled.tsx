import styled from 'styled-components';
import { Breakpoints, Colors } from '@/ui/index';
import helpers from '@/helpers/ui';

const Styled = {
  Container: styled.div`
    padding: 5rem 20rem;
    @media (max-width: ${Breakpoints.lg}) {
        padding: 2rem;
    }
    @media (max-width: ${Breakpoints.sm}) {
        padding: 2rem .5rem;
    }
  `,

  Card: styled.div`
    margin: 0;
    width: 100%;
    box-shadow: 0 1px 4px #ccc;
    border-radius: 2px;
    padding: 10px 30px 5px;
    background: ${Colors.white};

    ${helpers}
  `,
};

export default Styled;
