import Link from "next/link";

export default function Nav() {
  return (
    <nav className="shadow-md border border-[var(--foreground)] rounded-md text-center bg-[var(--middleground)] color-[var(--text)] space-x-8
    py-4 px-8 md:px-4 my-4 mx-auto max-w-screen-md">
      <Link className="hover:font-medium text-(--text)" href="/">Accueil</Link>
      <Link className="hover:font-medium text-(--text)" href="/jeu">Jouer</Link>
      <Link className="hover:font-medium text-(--text)" href="/essai">Essayer</Link>
      <Link className="hover:font-medium text-(--text)" href="/login">Login</Link>
      <Link className="hover:font-medium text-(--text)" href="/profil">Profil</Link>
    </nav>
  )
}
