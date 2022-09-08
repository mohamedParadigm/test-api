// Styles
import { SWRConfig } from "swr";
import fetcher from "../lib/fetcher";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default App;
