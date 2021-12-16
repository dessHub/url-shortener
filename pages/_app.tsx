import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { positions, Provider, types } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  type: types.SUCCESS,
  timeout: 8000,
  position: positions.TOP_CENTER,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider template={AlertTemplate} {...options}>
      <Component {...pageProps} />
    </Provider>
    )
}

export default MyApp
