import type { NextPage } from 'next'
import { useState } from 'react';
import { Urls, Url } from '@/types';
import Styled from '@/components/pages/HomePage.styled';
import StyledListCard from '@/components/ListCard.styled';
import Header from '@/components/Header.component';
import InputComponent from '@/components/InputComponent.component';
import ListCard from '@/components/ListCard.component';
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
    console.log('save')
  }

  const handleCopy = () => {
    console.log('copy')
  }

  const handleDelete = () => {
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
        {isError && <StyledListCard.Text mt={20} fs={12} color={Colors.warning}>Add a URL to shorten.</StyledListCard.Text>}
      </Styled.Card>

      {urls.length > 0 && urls.map(item => {
      return (
        <Styled.Card mt={10} key={item.id}>
          <ListCard url={item} handleCopy={handleCopy} handleDelete={handleDelete} />
        </Styled.Card>
      )})}

      {urls.length === 0 && (
        <Styled.Card mt={40} p='40px'>
          <StyledListCard.Text>You have 0 Shortened URLs. Shorten some URLs</StyledListCard.Text>
        </Styled.Card>
      )}
    </Styled.Container>
  )
}

export default Home
