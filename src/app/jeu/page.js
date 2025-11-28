import Link from "next/link";

export default function BlindTestAccueil() {
  return (
      <main className="mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8">
          <h1 className="text-3xl font-bold mb-4 text-(--text)">CHOISISSEZ UNE CATEGORIE !</h1>
          <div className="flex flex-col md:flex-row gap-4 w-[100%] mb-12">
              <Link href="/jeu/playlist" className="bg-[var(--white)] dark:bg-[var(--middleground)] px-4 py-2 duration-300 ease-in-out text-[var(--text)] shadow-md rounded-[10px] expand-hover">Playlist</Link>
              <Link href="/jeu/genre" className="bg-[var(--middleground)] dark:bg-[var(--foreground)] px-4 py-2 duration-300 ease-in-out text-[var(--text)] shadow-md rounded-[10px] expand-hover">Genre</Link>
              <Link href="/jeu/search" className="bg-[var(--white)] dark:bg-[var(--middleground)] px-4 py-2 duration-300 ease-in-out text-[var(--text)] shadow-md rounded-[10px] expand-hover">Mot-clé</Link>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-(--text)">CATEGORIES EN VEDETTE</h2>
          <div className="flex flex-col md:flex-row gap-4 w-[100%]">
              <Link href="/jeu/playlist/1251125011" className="bg-[var(--middleground)] dark:bg-[var(--foreground)] px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-[10px] expand-hover">Années 90'</Link>
              <Link href="/jeu/genre/152" className="bg-(--white) dark:bg-[var(--middleground)] px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-[10px] expand-hover">Rock</Link>
              <Link href="/jeu/search/Ptite Soeur" className="bg-[var(--middleground)] dark:bg-[var(--foreground)] px-4 py-2 duration-300 ease-in-out text-[var(--text)] shadow-md rounded-[10px] expand-hover">Ptite Soeur</Link>
          </div>
      </main>
  );
}