import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Urls, Url } from '@/types';
import Styled from '@/components/pages/HomePage.styled';
import StyledListCard from '@/components/ListCard.styled';
import Header from '@/components/Header.component';
import InputComponent from '@/components/InputComponent.component';
import ListCard from '@/components/ListCard.component';
import { Colors } from '@/ui';
import { v4 as uuidv4 } from 'uuid';
import { useAlert } from 'react-alert';

const Home: NextPage = () => {
  const [urls, setUrls] = useState<Urls>([])
  const [url, setUrl] = useState<Url>({
    long: '',
    short: '',
    id: ''
  })
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const alert = useAlert();

  useEffect(() => {
    // Check if URL list already exist in the session storage and initialize the state with it.
    sessionStorage.getItem("urlList") &&
    setUrls(JSON.parse(sessionStorage.getItem("urlList") || '').urls);
  }, [])

  const handleChange = (e) => {
    setUrl({
      ...url,
      long: e.target.value
    })
    // check if input value is empty
    if (e.target.value === '') {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }

  const handleSave = async () => {
    // Show error if input value is empty
    if (url.long === '') {
      setIsError(true)
    } else {
      setLoading(true);
      setIsError(false);

      try {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${url.long}`
        );
        let res = await response.json();

        if (res.ok) {
          setLoading(false);
          const arr: Urls = [...urls];

          // Add new url to the beginning of the array
          arr.unshift({ long: url.long, short: res.result.short_link2, id: uuidv4()})
          setUrls(arr)

          const data = {
            urls: arr
          }

          sessionStorage.setItem('urlList', JSON.stringify(data))
          setUrl({
            long: '',
            short: '',
            id: ''
          })
          setLoading(false)

          alert.show(
            <div style={{ color: 'white', textTransform: 'initial' }}>
              Url Shortened successfuly!
            </div>,
          );
          return;
        }

        if (!res.ok) {
          setLoading(false);
          alert.error(
            <div style={{ color: 'white', textTransform: 'initial' }}>
              Something went wrong! Try again.
            </div>,
          );
          return;
        }
      } catch (e) {
        setLoading(false);
        alert.error(
          <div style={{ color: 'white', textTransform: 'initial' }}>
            Something went wrong! Try again.
          </div>,
        );
        return;
      }
    }
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
