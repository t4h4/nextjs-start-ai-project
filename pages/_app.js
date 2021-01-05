import "../styles/app.css";
import "../styles/navigation.css";
//Adding a Global Stylesheet
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
