import styled from 'styled-components';
import { Breakpoints } from '@/ui/index';

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
};

export default Styled;
