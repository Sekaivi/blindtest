import Link from "next/link";
import Search from "@/components/blindtestOptions/Search" ;
import VSMode from "@/app/jeu/vs/VSMode" ;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';

// objectif, proposer des options ou de chercher ce que le jkoueur veut
// ce sera aussi possible depuis la page jouer tout court
//  donc creer un component idealement et le load ! Juste qu'ila ffichera QUE certaines options si on est sur une query specifique
// si search field -> renvoyer le component qui sait qu'il doit renvoyer une page.
// juste il prend le type de requete en param !

export default async function typePage({params}) {
    let {type} = await params;
    type = (type || "").trim().toLowerCase();
    let header;
    let sub;

    switch (type) {
        case "playlist":
            header = "d'une playlist";
            sub = "Entrez l'identifiant d'une playlist ou le lien vers celle-ci";
            // constituer un compendium de playlist qui correspondent à differentes categories de nous meme
            break;
        case "genre":
            // ici, afficher plutot les genre + une searchbox qui
            //  permet d'en selectionner un en partoculier
            header = "de l'ID d'un genre";
            sub = "Entrez l'identifiant du genre souhaité";
            break;
        case 'vs':
            return <VSMode/>;
        case "search":
            header = "d'un mot clé";
            sub = "Recherchez un mot-clé";
            break;
    }

    return (
        <div className="space-y-4 px-4">
            <section className="flex flex-row justify-between mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8 py-4
          bg-(--accent-lighter) rounded-lg border border-(--accent) shadow-md">
                <h1 className="text-3xl font-bold text-(--white)">Personnalisez votre blindtest à partir {header}</h1>
            </section>
            <div className="flex flex-col mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8 py-4
            bg-(--middleground) rounded-lg border border-(--foreground) shadow-md space-y-4">
                <Link href="/jeu"
                      className="flex flex-row flex-nowrap items-center gap-2 w-fit cursor-pointer bg-(--white) shadow-md text-(--accent) duration-200 hover:text-(--accent-lighter) font-bold uppercase rounded px-4 py-2 active:shadow-[none] active:bg-gray-50">
                    <FontAwesomeIcon icon={faCaretLeft} className="h-[1rem]"/>
                    Retour
                </Link>
                <p className="mb-2 text-(--text)">{sub}</p>
                <Search type={type}/>
            </div>
        </div>
    );
}