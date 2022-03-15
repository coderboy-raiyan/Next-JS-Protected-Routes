import { Provider } from "react-redux";
import AuthWrapper from "../context/AuthWrapper";
import "../styles/globals.css";
import store from "./../redux/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </Provider>
  );
}

export default MyApp;
