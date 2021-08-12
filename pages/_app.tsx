import { ThemeProvider } from 'styled-components';
import '../styles/globals.css'
import { Chess24Theme } from '../theme';
import { Props } from './types';

function MyApp({ Component, pageProps, data }: Props) {
  return (
    <ThemeProvider theme={Chess24Theme} >
      <Component {...pageProps} data={data} />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
  const data = await response.json();

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, data };
};
export default MyApp;