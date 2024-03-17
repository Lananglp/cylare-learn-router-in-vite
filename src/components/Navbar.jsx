import { Link, NavLink, useLocation } from "react-router-dom"
import Container from "./Container"
import { useEffect, useRef, useState } from "react";

function Navbar() {

    const route = useLocation();
    const pathname = route.pathname;
    const navRef = useRef(null);
    const [navbar, setNavbar] = useState(false);

    const openNavbar = () => {
        setNavbar(true);
    }

    const closeNavbar = () => {
        setNavbar(false);
    }

    useEffect(() => {

        const body = document.body;

        if (navbar) {
            body.classList.add("overflow-hidden");
        } else {
            body.classList.remove("overflow-hidden");
        }

        const clickInOutside = (e) => {
            if (!navRef.current?.contains(e.target)) {
                setNavbar(false);
            }
        }

        document.addEventListener("mousedown", clickInOutside);

        return () => {
            body.classList.remove("overflow-hidden");
            document.addEventListener("mousedown", clickInOutside);
        }

    }, [navbar, navRef]);

  return (
    <>
    <header>
        <div className="fixed z-50 inset-x-0 top-0 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-[2px]">
            <Container className="relative">
                <div className="flex justify-between items-center">
                    <div className="py-4">
                        <Link to="/">
                            <h6 className="text-white text-2xl">Cylare Vite</h6>
                            <p className="hidden md:block text-zinc-300 text-sm">Lananglp sedang belajar react router DOM</p>
                        </Link>
                    </div>
                    <button onClick={openNavbar} type="button" className="block md:hidden p-2"><i className="text-white hover:text-rose-500 fa fa-lg fa-fw fa-bars duration-300"/></button>
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-4">
                            <li><NavLink to="/" className="navLink">Home</NavLink></li>
                            <li><NavLink to="/product" className="navLink">Product</NavLink></li>
                            <li><NavLink to="/blog" className="navLink">Blog</NavLink></li>
                            <li><NavLink to="/about" className="navLink">About</NavLink></li>
                            <li><NavLink to="/xxxxxx" className="navLink">More page</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>

        
        {navbar && <div className="fixed z-50 inset-0 bg-black/50"/>}
        <nav className={`${navbar ? 'translate-x-0' : 'translate-x-full'} fixed z-[100] inset-y-0 end-0 ease-in-out duration-700`}>
            <ul ref={navRef} className="bg-zinc-950/50 backdrop-blur-[2px] border-s border-zinc-700 w-52 h-full flex flex-col justify-center items-center gap-4">
                <li><NavLink onClick={closeNavbar} to="/" className="navLink">Home</NavLink></li>
                <li><NavLink onClick={closeNavbar} to="/product" className="navLink">Product</NavLink></li>
                <li><NavLink onClick={closeNavbar} to="/blog" className="navLink">Blog</NavLink></li>
                <li><NavLink onClick={closeNavbar} to="/about" className="navLink">About</NavLink></li>
                <li><NavLink onClick={closeNavbar} to="/xxxxxx" className="navLink">More page</NavLink></li>
            </ul>
            <button onClick={closeNavbar} type="button" className={`${navbar ? '-start-14 opacity-100' : '-start-0 opacity-0'} absolute -z-10 top-1/2 -translate-y-1/2 border-2 border-rose-500 hover:border-rose-700 text-rose-500 hover:text-rose-700 rounded-full p-5 hover:scale-105 duration-300`}><i className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fa fa-fw fa-angles-right"/></button>
        </nav>
    </header>
    <div className="py-8 md:py-10"/>
    </>
  )
}

export default Navbar