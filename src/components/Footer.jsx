import { motion } from "framer-motion";
import Container from "./Container"

function Footer() {

    const animationConfiguration = {
        initial: { y: '2rem', opacity: 0 },
        animate: { y: '0rem', opacity: 1 },
        exit: { y: '2rem', opacity: 0 },
    };

  return (
    <motion.footer 
        className="fixed inset-x-0 bottom-0 bg-zinc-950/50 backdrop-blur-[2px] border-t border-zinc-800 py-8 text-center"
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
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
    </motion.footer>
  )
}

export default Footer