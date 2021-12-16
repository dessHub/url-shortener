import type { NextPage } from 'next';
import Styled from '@/components/Header.styled';

const HeaderComponent: NextPage = () => {
    return (

        <Styled.Container>
            <Styled.Header mb={10}>Get your URLs shortened</Styled.Header>
            <Styled.SubHeader>Copy the shortened links and share it.</Styled.SubHeader>
        </Styled.Container>
    )
}

export default HeaderComponent;