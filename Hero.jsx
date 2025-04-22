import profilePic from "../assets/image1.jpg"
import {motion} from "framer-motion"
const containerVariants = {
  hidden :{opacity:0,x:-100},
  visible:{
    opacity:1,
    x:0,
    transition:{
      duration:0.5,
      staggerChildren:0.5,
    }
  }
}
const childVariants = {
  hidden:{opacity:0,x:-100},
  visible:{opacity:1,x:0,transition:{duration:0.5}}
}
const Hero = () => {

  return (
    <div className="pt-28  lg:pt-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img 
            src={profilePic} 
            alt="Shravan" 
            className="border border-stone-900 rounded-3xl"
            width={650}
            height={650}
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1 }}
            transition={{duration:1,delay:1.5}}/>

          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}

            className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2 
            variants={childVariants}
            className="pb-2 text-4xl tracking-tighter lg:text-8xl">Shravan
            </motion.h2>
            <motion.span
            variants={childVariants} 
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Elder Healthcare Webapp</motion.span>
            <motion.p
            variants={childVariants} 
            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">Shravana is an advanced elder care platform that connects seniors with their children through real-time health updates and AI-driven predictive alerts. It features an interactive community, daily wellness streaks, and guided workouts with posture detection. With proactive health monitoring and timely notifications, Shravana ensures seniors stay engaged and cared for while giving families peace of mind.</motion.p>

          </motion.div>
        </div>

      </div>

    </div>
  )
}

export default Hero