import Layout from "../components/layout";
function HomePage() {
  return (
    <Layout>
      <h1>This is Index with h1</h1>
      <h2 className="h2css">This is Index with h2</h2>
      {/* styled-jsx method */}
      <style jsx>{`
        h1 {
          color: white;
          background-color: blue;
        }

        .h2css {
          color: yellow;
          background-color: blue;
        }
      `}</style>
      
      {/* global */}
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </Layout>
  );
}

export default HomePage;
