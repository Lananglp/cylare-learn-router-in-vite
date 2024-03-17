import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect } from "react";

function Layout(props) {

    const {children} = props;
    const route = useLocation();
    const pathname = route.pathname;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  )
}

export default Layout