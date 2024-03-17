import { Link } from "react-router-dom"
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"

function Product() {
  return (
    <PageTransition>
        <Container circleShadow>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 py-24">
                <div className="max-w-2xl">
                <p className="mb-4 font-semibold text-rose-500">Belajar React meet - 03</p>
                    <h1 className="mb-8 text-white text-5xl leading-tight">Ini merupakan halaman produk</h1>
                    <p className="leading-8 text-lg">Untuk menjadi orang baik kita harus selalu membuat kebaikan, dengan adanya kebaikan kita akan selalu mendapat suatu hal yang baik dari kebaikan tersebut, terkadang sering melakukan kebaikan bisa dikatakan tidak baik namun yang baik sudah pasti kebaikan.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Link to="/product/Vite-js" className="flex justify-center items-center backdrop-blur-[2px] text-zinc-400 hover:text-rose-500 rounded-lg border border-zinc-800 hover:border-rose-500 shadow-2xl duration-300 hover:shadow-rose-500/10">
                        <div className="text-center py-12">
                            <h6 className="text-base md:text-xl">Vite Js</h6>
                            <p className="text-zinc-500 text-xs">Klik untuk selengkapnya...</p>
                        </div>
                    </Link>
                    <Link to="/product/Tailwind-CSS" className="flex justify-center items-center backdrop-blur-[2px] text-zinc-400 hover:text-rose-500 rounded-lg border border-zinc-800 hover:border-rose-500 shadow-2xl duration-300 hover:shadow-rose-500/10">
                        <div className="text-center py-12">
                            <h6 className="text-base md:text-xl">Tailwind CSS</h6>
                            <p className="text-zinc-500 text-xs">Klik untuk selengkapnya...</p>
                        </div>
                    </Link>
                    <Link to="/product/Framer-Motion" className="flex justify-center items-center backdrop-blur-[2px] text-zinc-400 hover:text-rose-500 rounded-lg border border-zinc-800 hover:border-rose-500 shadow-2xl duration-300 hover:shadow-rose-500/10">
                        <div className="text-center py-12">
                            <h6 className="text-base md:text-xl">Framer Motion</h6>
                            <p className="text-zinc-500 text-xs">Klik untuk selengkapnya...</p>
                        </div>
                    </Link>
                    <Link to="/product/Font-Awesome" className="flex justify-center items-center backdrop-blur-[2px] text-zinc-400 hover:text-rose-500 rounded-lg border border-zinc-800 hover:border-rose-500 shadow-2xl duration-300 hover:shadow-rose-500/10">
                        <div className="text-center py-12">
                            <h6 className="text-base md:text-xl">Font Awesome</h6>
                            <p className="text-zinc-500 text-xs">Klik untuk selengkapnya...</p>
                        </div>
                    </Link>
                </div>
            </div>
        </Container>
    </PageTransition>
  )
}

export default Product