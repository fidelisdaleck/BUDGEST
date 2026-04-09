"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
interface card1Props {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function Card1({ title, icon, description }: card1Props) {
  return (
    <div className="bg-[#1e7f4300] hover:shadow-xl shadow-sm backdrop-blur-sm px-10 py-10 rounded-2xl border-gray-700 space-y-5">
      <div className="bg-[#1e7f4318] hover:bg-[#1e7f4333] rounded-full w-15 h-15 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-2xl text-[#1e7f43]">{title}</p>
      <div className="w-20 h-1 bg-[#1e7f43e1] rounded-full mb-4"></div>
      <p className="text-gray-500 text-7">{description}</p>
      <Link href="/inscription" className="flex gap-2 text-[#1e7f43] text-xl hover:underline">
          Decouvrir
          <ArrowRight size={20} />
      </Link>
    </div>
  );
}
