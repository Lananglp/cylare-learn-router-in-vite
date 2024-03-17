import Container from "./Container"

function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-zinc-950/50 backdrop-blur-[2px] border-t border-zinc-800 py-8 text-center">
        <Container>
            {/* <p className="text-zinc-600 text-sm">Copyright © {new Date().getFullYear()} Lanang Cylare</p> */}
            <p className="text-sm mb-4">Dikembangkan dengan:</p>
            <ul className="flex justify-center items-center gap-8 text-rose-500 font-semibold text-xs sm:text-sm md:text-base">
                <li>Vite js</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Font Awesome</li>
            </ul>
        </Container>
    </footer>
  )
}

export default Footer