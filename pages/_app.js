import Layout from "../containers/Layout/Layout"

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
        )
  }
  
  export default MyApp