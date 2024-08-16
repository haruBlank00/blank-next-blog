import Link from "next/link"

export const NavBar = () => {
  return <nav className="pborder-b-2 border-neutral-400 py-6">
    <ul className="flex justify-end border-b-2 border-neutral-600 pb-2 px-6">
      <li>
        <Link href={'/'} className="hover:underline underline-offset-2 transition text-lg">
          Home
        </Link>
      </li>
    </ul>

  </nav>
}
