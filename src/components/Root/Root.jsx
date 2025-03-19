import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-base-100  rounded-sm shadow-sm">
        <Navbar></Navbar>
      </header>

      <section className="grow w-11/12 mx-auto">
        <Outlet></Outlet>
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
