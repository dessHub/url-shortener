import type { NextPage } from 'next'
import { useState } from 'react';
import { Urls, Url } from '@/types';
import Styled from '@/components/pages/HomePage.styled';
import Header from '@/components/Header.component';
import InputComponent from '@/components/InputComponent.component';
import { Colors } from '@/ui';

const Home: NextPage = () => {
  const [urls, setUrls] = useState<Urls>([])
  const [url, setUrl] = useState<Url>({
    long: '',
    short: '',
    id: ''
  })
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setUrl({
      ...url,
      long: e.target.value
    })
  }

  const handleSave = () => {
    console.log('delete')
  }

  return (
    <Styled.Container>
      <Header />

      <Styled.Card>
        <InputComponent
            onChange={handleChange}
            name="url"
            value={url.long}
            placeholder="Type URL..."
            ButtonColor={Colors.primary}
            loading={loading}
            required
            handleSave={handleSave}
            isError={isError}
          />
      </Styled.Card>
    </Styled.Container>
  )
}

export default Home
