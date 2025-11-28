import Image from "next/image";

// Page d'accueil ici !

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8">
      <h1 className="text-3xl font-bold mb-4 text-(--text)">Titre de la page d'accueil</h1>
      <p className="mb-6 text-(--text)">Blabla de page d'accueil</p>
    </div>
  )
}

