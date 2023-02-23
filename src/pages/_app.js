import Head from 'next/head';
import PropTypes from 'prop-types';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <title>Ankit Goel | Software Engineer</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};
