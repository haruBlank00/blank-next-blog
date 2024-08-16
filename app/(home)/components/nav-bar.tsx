import LogoIcon from "@/components/icons/logo.icon"
import Link from "next/link"

export const NavBar = () => {
  return <nav className="border-b-2 border-neutral-400 pt-6 pb-2 mb-8 flex items-center justify-between">
    <figure>
      <LogoIcon />
      <figcaption className="sr-only">Blank Blog</figcaption>
    </figure>
    <ul className="flex justify-end">
      <li>
        <Link href={'/'} className="hover:underline underline-offset-2 transition text-lg">
          Home
        </Link>
      </li>
    </ul>

  </nav>
}
