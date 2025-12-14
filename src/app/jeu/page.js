import Link from "next/link";

export default function BlindTestAccueil() {
  return (
      <div className="mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8 space-y-4">
          <section className="flex flex-row justify-between mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8 py-4
          bg-(--accent-lighter) rounded-lg border border-(--accent) shadow-md">
              <h1 className="text-3xl font-bold text-(--white)">Choisissez une catégorie</h1>
          </section>
          <div className="flex flex-col md:flex-row gap-4 w-full">
              <Link href="/jeu/playlist"
                    className="bg-(--middleground) border border-(--foreground) px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-lg expand-hover">Playlist</Link>
              <Link href="/jeu/genre"
                    className="bg-(--foreground) border border-(--gray) px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-lg expand-hover">Genre</Link>
              <Link href="/jeu/search"
                    className="bg-(--middleground) border border-(--foreground) px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-lg expand-hover">Mot-clé</Link>
          </div>
          <section className="flex flex-row justify-between mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8 py-4
          bg-(--accent) rounded-lg border border-(--accent-darker) shadow-md">
              <h2 className="text-3xl font-bold text-(--white)">Catégories en vedette</h2>
          </section>
          <div className="flex flex-col md:flex-row gap-4 w-full">
              <Link href="/jeu/vs"
                    className="bg-(--foreground) border border-(--gray) px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-lg expand-hover">
                  Mode VS</Link>
              <Link href="/jeu/playlist/1251125011"
                    className="bg-(--middleground) border border-(--foreground) px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-lg expand-hover">
                  Années 90'</Link>
              <Link href="/jeu/search/Ptite Soeur"
                    className="bg-(--foreground) border border-(--gray) px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-lg expand-hover">
                  Ptite Soeur</Link>
          </div>
      </div>
  );
}