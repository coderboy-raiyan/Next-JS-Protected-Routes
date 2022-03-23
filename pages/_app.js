import { useRouter } from "next/router";
import { Provider } from "react-redux";
import AuthenticatedLayout from "../components/Layout/AuthenticatedLayout";
import AuthProvider from "../context/AuthProvider";
import "../styles/tailwind.css";
import store from "./../redux/store/store";

const noAuthRequired = ["/", "/login", "/register"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <AuthProvider>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <AuthenticatedLayout>
            <Component {...pageProps} />
          </AuthenticatedLayout>
        )}
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
