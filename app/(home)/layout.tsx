import Link from "next/link";
import { motion } from 'framer-motion';
import { NavBar } from "./components/nav-bar";
import { GridSmallBackground } from "@/components/ui/grid-small-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Typography from "@/components/ui/typography";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <GridSmallBackground>
        <ShootingStars />
        <StarsBackground />
        <div className="flex flex-col max-w-4xl mx-auto min-h-screen relative z-50">
          <NavBar />

          {children}

          <footer className="my-8">
            <Typography.H3 className="text-neutral-700 text-base dark:text-neutral-200 text-center">Made with ❤️ by <Link href="https://github.com/iamkushal" className="hover:underline">Haru</Link></Typography.H3>
          </footer>
        </div>

      </GridSmallBackground>

    </Suspense>
  )
}
