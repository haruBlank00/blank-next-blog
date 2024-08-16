import Link from "next/link";
import { motion } from 'framer-motion';
import { NavBar } from "./components/nav-bar";
import { GridSmallBackground } from "@/components/ui/grid-small-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GridSmallBackground>
      <div className="flex flex-col max-w-4xl mx-auto min-h-screen">
        <NavBar />

        {children}
      </div>

    </GridSmallBackground>
  )
}
