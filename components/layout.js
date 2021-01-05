import Navigation from "./navigation";
function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <footer>2021</footer>
    </div>
  );
}

export default Layout;
