"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={` flex flex-col items-center justify-center gap-3 my-3`}>
      <img className={`w-[100px] h-[100px]`} src={`mintheinkha.jpg`} alt={`min thein kha`}/>
      <p className={`font-bold text-3xl`}>လက်ထောက်ဗေဒင်</p>
    </nav>
  );
};
