import '../styles/globals.css'
import { Props } from './types';

function MyApp({ Component, pageProps, data }: Props) {
  return <Component {...pageProps} data={data} />
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