import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css'
import { Chess24Theme } from '../theme';
import { Props } from './types';

function MyApp({ Component, pageProps }: Props) {
  const [data, setData] = useState<string[]>([]);

  const getData = async () => {
    const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
    const fetchedData = await response.json();
    setData([...data, ...fetchedData]);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <ThemeProvider theme={Chess24Theme} >
      <Component {...pageProps} data={data} getNewData={() => getData()} />
    </ThemeProvider>
  )
}

export default MyApp;