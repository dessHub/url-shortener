import type { NextPage } from 'next'
import Styled from '@/components/pages/HomePage.styled';
import Header from '@/components/Header.component';

const Home: NextPage = () => {
  return (
    <Styled.Container>
      <Header />
    </Styled.Container>
  )
}

export default Home
