import Image from "next/image";
import Leaderboard from "@/components/Leaderboard";
import Link from "next/link";

// Page d'accueil ici !

export default function Home() {
  return (
      <div className="px-4">
          <section className="flex flex-col mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8 py-4
          bg-(--middleground) rounded-lg border border-(--foreground) shadow-md mb-4 space-y-4">
              <div>
                  <p className="inline-flex text-3xl font-bold text-(--text)">Bienvenue sur&nbsp;</p>
                  <h1 className="inline-flex text-3xl font-bold text-(--text)">BlindtestMaker</h1>
              </div>
              <p className="text-(--text)">
                  Amateur de blindtests ? Avide de connaissances musicales ? Envie de défier vos amis autour d'un blindtest ? Blindtest Maker est la référence
                  pour générer le blindtest parfait pour vous. Allez, n'attendez plus et lancez-vous !
              </p>
              <a className="self-center cursor-pointer text-(--white) shadow bg-(--accent) duration-200 hover:bg-(--accent-lighter) font-bold uppercase rounded px-4 py-2 active:shadow-none w-fit"
                 href="/jeu">Jouer maintenant</a>
          </section>
          {/* ---TABLEAU DE BORD--- */}
          <Leaderboard/>
          <section className="flex flex-row justify-between mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8 py-4
          bg-(--accent-lighter) rounded-lg border border-(--accent) shadow-md my-4">
              <h2 className="text-3xl font-bold text-(--white)">
                  Catégories
              </h2>
          </section>
          <section
              className="flex flex-row justify-between mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl">
              <div className="flex flex-col md:flex-row gap-4 w-[100%]">
                  <Link href="/jeu/"
                        className="bg-(--middleground) border border-(--foreground) px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-lg expand-hover">
                      Créez votre propre blindtest
                  </Link>
                  <Link href="/jeu/semaine"
                        className="bg-(--foreground) border border-(--gray) px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-lg expand-hover">
                      Blindtest de la semaine
                  </Link>
                  <Link href="/jeu/genre/0"
                        className="bg-(--middleground) border border-(--foreground) px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-lg expand-hover">
                      Blindtest tous genres
                  </Link>
              </div>
          </section>
          {/* ---MODE VERSUS--- */}
          <section className="flex flex-row justify-between mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8 py-4
          bg-(--accent) rounded-lg border border-(--accent-darker) shadow-md my-4">
              <h2 className="text-3xl font-bold text-(--white)">
                  Versus
              </h2>

          </section>
          <section
              className="flex flex-row justify-between mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl">
              <div className="flex flex-col md:flex-row gap-4 w-[100%]">
                  <div className="md:w-[38.5%] bg-(--middleground) border border-(--foreground) px-4 py-2 text-(--text) shadow-md rounded-lg">
                      <h3 className="text-xl font-bold text-(--text) mb-2">Affrontez vos amis en ligne</h3>
                      <p>Blindtest Maker vous offre la possibilité unique de défier vos amis dans </p>
                  </div>
                  <Link href="/jeu/vs"
                        className="bg-(--foreground) border border-(--gray) px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-lg expand-hover">
                      Rejoindre une partie
                  </Link>
                  <Link href="/jeu/vs"
                        className="bg-(--middleground) border border-(--foreground) px-4 py-2 duration-300 ease-in-out text-(--text) shadow-md rounded-lg expand-hover">
                      Créer une partie
                  </Link>
              </div>
          </section>
      </div>
  )
}

