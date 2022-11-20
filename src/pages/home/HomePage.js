import Header from "./components/Header";
import Main from "./components/Main";

const HomePage = () => {
  return (
    <div className="h-screen overflow-x-auto ">
      <div className="sticky top-0 z-10 bg-white pt-6">
        <Header />
      </div>
      <Main />
    </div>
  );
};

export default HomePage;
