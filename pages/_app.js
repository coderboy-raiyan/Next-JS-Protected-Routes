import { Provider } from "react-redux";
import AuthProvider from "../context/AuthProvider";
import "../styles/tailwind.css";
import store from "./../redux/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
