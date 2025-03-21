import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  const navigation = useNavigation();


  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-base-100  rounded-sm shadow-sm">
        <Navbar></Navbar>
      </header>

      <section className="grow w-11/12 mx-auto">
        {navigation.state === "loading" ? (
          <span className="loading loading-bars loading-xl"></span>
        ) : (
          <Outlet></Outlet>
        )}
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
