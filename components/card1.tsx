"use client";
import { motion } from "motion/react"

import {ReactNode} from "react"
interface card1Props {
  icon: ReactNode;
  title:string;
  description: string;
}

export default function Card1({ title, icon, description }: card1Props) {
  return(
    <motion.div 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onHoverStart={() => console.log('hover started!')} 
    className="bg-[#1e7f4300] hover:shadow-xl shadow-lg px-10 py-10 rounded-xl space-y-5"
    >
        <div className="flex items-center justify-center">{icon}</div>
        <p className="text-xl text-[#333333]">{title}</p>
        <p className="text-gray-500 text-7">{description}</p>
    </motion.div>
  )
}
