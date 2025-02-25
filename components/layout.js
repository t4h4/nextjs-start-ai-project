import Navigation from "./navigation";
import Head from 'next/head';
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Taha's Web Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* <Navigation /> */}
      <main>{children}</main>
    </div>
  );
}

export default Layout;
