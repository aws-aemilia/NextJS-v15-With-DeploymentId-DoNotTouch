import "../styles/global.css";
import "../styles/layout.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Component {...pageProps} />
  );
}
