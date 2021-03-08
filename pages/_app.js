import Layout from "../containers/Layout/Layout";

import "../styles/global.scss";

// Para Performance

// export function reportWebVitals(metric) {
//   console.log(metric);
// }

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
