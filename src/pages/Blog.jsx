import { Link } from "react-router-dom"
import Container from "../components/Container"
import PageTransition from "../components/PageTransition"

function Blog() {
  return (
    <PageTransition>
        <Container circleShadow className="pb-24">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 py-24">
                <div className="max-w-2xl">
                    <div className="sticky top-40">
                        <p className="mb-4 font-semibold text-rose-500">Belajar React meet - 03</p>
                        <h1 className="mb-8 text-white text-5xl leading-tight">Suka membaca sesuatu? mari kita membaca blog</h1>
                        <p className="leading-8 text-lg">Untuk menjadi orang baik kita harus selalu membuat kebaikan, dengan adanya kebaikan kita akan selalu mendapat suatu hal yang baik dari kebaikan tersebut, terkadang sering melakukan kebaikan bisa dikatakan tidak baik namun yang baik sudah pasti kebaikan.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <Link to={`/blog/${encodeURIComponent("Tips-menjadi-programmer-adalah-dengan-mempelajari-html,-css-dan-javascript")}`} className="backdrop-blur-[2px] text-zinc-400 hover:text-rose-500 rounded-lg border border-zinc-800 hover:border-rose-500 shadow-2xl duration-300 hover:shadow-rose-500/10">
                        <div className="max-w-lg px-4 py-12">
                            <h6 className="mb-2 text-base md:text-xl">Tips menjadi programmer adalah dengan mempelajari html, css dan javascript</h6>
                            <p className="mb-2 line-clamp-3 text-zinc-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab non repellendus ipsum, ducimus maxime quos a itaque omnis ex. Nobis laudantium fuga corrupti et sit quaerat officiis atque earum cumque. Accusantium quibusdam fugit libero, animi distinctio facilis, voluptas labore earum quod dolores temporibus magni fuga. Totam consectetur eos officiis.</p>
                            <p className="text-xs">by <span className="text-rose-500">Kadek Lanang</span> - Minggu, 17 Maret 2024</p>
                        </div>
                    </Link>
                    <Link to={`/blog/${encodeURIComponent("Update-terbaru-kini-para-programmer-sangat-dimudahkan-dengan-bantuan-chatGPT")}`} className="backdrop-blur-[2px] text-zinc-400 hover:text-rose-500 rounded-lg border border-zinc-800 hover:border-rose-500 shadow-2xl duration-300 hover:shadow-rose-500/10">
                        <div className="max-w-lg px-4 py-12">
                            <h6 className="mb-2 text-base md:text-xl">Update terbaru kini para programmer sangat dimudahkan dengan bantuan chatGPT</h6>
                            <p className="mb-2 line-clamp-3 text-zinc-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab non repellendus ipsum, ducimus maxime quos a itaque omnis ex. Nobis laudantium fuga corrupti et sit quaerat officiis atque earum cumque. Accusantium quibusdam fugit libero, animi distinctio facilis, voluptas labore earum quod dolores temporibus magni fuga. Totam consectetur eos officiis.</p>
                            <p className="text-xs">by <span className="text-rose-500">Kadek Lanang</span> - Minggu, 17 Maret 2024</p>
                        </div>
                    </Link>
                    <Link to={`/blog/${encodeURIComponent("Ternyata-Next-js-+-Express-Js-sangatlah-cepat,-begini-cara-menggunakannya")}`} className="backdrop-blur-[2px] text-zinc-400 hover:text-rose-500 rounded-lg border border-zinc-800 hover:border-rose-500 shadow-2xl duration-300 hover:shadow-rose-500/10">
                        <div className="max-w-lg px-4 py-12">
                            <h6 className="mb-2 text-base md:text-xl">Ternyata Next js + Express Js sangatlah cepat, begini cara menggunakannya</h6>
                            <p className="mb-2 line-clamp-3 text-zinc-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab non repellendus ipsum, ducimus maxime quos a itaque omnis ex. Nobis laudantium fuga corrupti et sit quaerat officiis atque earum cumque. Accusantium quibusdam fugit libero, animi distinctio facilis, voluptas labore earum quod dolores temporibus magni fuga. Totam consectetur eos officiis.</p>
                            <p className="text-xs">by <span className="text-rose-500">Kadek Lanang</span> - Minggu, 17 Maret 2024</p>
                        </div>
                    </Link>
                    <Link to={`/blog/${encodeURIComponent("Bingung-untuk-memulai-ngoding-dari-mana?-disini-kamu-akan-tahu-semua-alurnya")}`} className="backdrop-blur-[2px] text-zinc-400 hover:text-rose-500 rounded-lg border border-zinc-800 hover:border-rose-500 shadow-2xl duration-300 hover:shadow-rose-500/10">
                        <div className="max-w-lg px-4 py-12">
                            <h6 className="mb-2 text-base md:text-xl">Bingung untuk memulai ngoding dari mana? disini kamu akan tahu semua alurnya</h6>
                            <p className="mb-2 line-clamp-3 text-zinc-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ab non repellendus ipsum, ducimus maxime quos a itaque omnis ex. Nobis laudantium fuga corrupti et sit quaerat officiis atque earum cumque. Accusantium quibusdam fugit libero, animi distinctio facilis, voluptas labore earum quod dolores temporibus magni fuga. Totam consectetur eos officiis.</p>
                            <p className="text-xs">by <span className="text-rose-500">Kadek Lanang</span> - Minggu, 17 Maret 2024</p>
                        </div>
                    </Link>
                </div>
            </div>
        </Container>
    </PageTransition>
  )
}

export default Blog