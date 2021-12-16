import styled from 'styled-components';
import { Breakpoints, Colors } from '@/ui/index';
import helpers from '@/helpers/ui';
import { Typography } from '@/ui';

const Styled = {
  Container: styled.div`
    padding: 2rem 1rem;
  `,
  Header: styled.div`
    font-weight: 600;
    font-family: ${Typography.fontPrimary};
    font-size: 30px;
    color: ${Colors.text};

    ${helpers}
  `,
  SubHeader: styled.div`
    font-weight: 200;
    font-family: ${Typography.fontPrimary};
    font-size: 20px;

    ${helpers}
  `,
};

export default Styled;
