"use client";

import {ReactNode} from "react"
interface cardProps {
  icon: ReactNode;
  description: string;
}

export default function Card({ icon, description }: cardProps) {
  return(
    <div
    className="bg-[#1e7f4309] shadow-lg hover:shadow-xl px-10 py-10 rounded-xl space-y-10 hover:-translate-y-3">
      <div className="flex items-center justify-center">{icon}</div>
      <p className="text-[#333333] text-xl">{description}</p>
    </div>
  )
}
