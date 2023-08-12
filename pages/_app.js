import '../styles/globals.css';
import Layout from '../components/layout/Layout';

//the component props received there holds the actual page content that should be received
//pageProps holds the actual props our pages might be receiving 
//and this props are pass in automatically by next js 
function MyApp({ Component, pageProps }) {
  return <Layout>
            <Component {...pageProps} />
        </Layout>
}

export default MyApp
