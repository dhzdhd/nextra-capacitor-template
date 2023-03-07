import { useState } from "react";
import NotAuthenticated from "../components/NotAuthenticated";

const App = ({ Component, pageProps }: any) => {
  const [authenticated, setAuthenticated] = useState(false);

  if (authenticated) {
    return <Component {...pageProps} />;
  } else {
    return <NotAuthenticated setAuthenticated={setAuthenticated} />;
  }
};

export default App;
