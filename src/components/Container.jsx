import { motion } from "framer-motion";

function Container(props) {

    const {circleShadow, className, children} = props;

    const animationConfiguration = {
        initial: {x: '-2rem', opacity: 0 },
        animate: {x: '0rem', opacity: 1 },
        exit: {x: '-2rem', opacity: 0 },
    };

  return (
    <div className={`${className} ${circleShadow && 'min-h-screen'} mx-4 md:mx-8 lg:mx-24 xl:mx-32`}>
        {circleShadow &&
            <div className="fixed inset-0 -z[999] overflow-hidden">
                <div className="relative h-full">
                    <motion.div variants={animationConfiguration}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.7, ease: 'easeInOut' }} 
                        className="absolute -z-20 -start-64 -top-64 p-72 bg-circle-shadow"
                    />
                    <motion.div variants={animationConfiguration}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.7, ease: 'easeInOut' }} 
                        className="absolute -z-20 start-64 -bottom-32 p-72 bg-circle-shadow"
                    />
                    <motion.div variants={animationConfiguration}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.7, ease: 'easeInOut' }} 
                        className="absolute -z-20 -end-72 top-32 p-72 bg-circle-shadow"
                    />
                </div>
            </div>
        }
        {children}
    </div>
  )
}

export default Container