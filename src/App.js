import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import ROUTES from "./routes";

const App = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <ROUTES />
      </main>
      <Footer />
    </>
  );
};

export default App;
