import Link from "next/link";
import Search from "@/components/blindtestOptions/Search" ;
import VSMode from "@/app/jeu/vs/VSMode" ;

// objectif, proposer des options ou de chercher ce que le jkoueur veut
// ce sera aussi possible depuis la page jouer tout court
//  donc creer un component idealement et le load ! Juste qu'ila ffichera QUE certaines options si on est sur une query specifique
// si search field -> renvoyer le component qui sait qu'il doit renvoyer une page.
// juste il prend le type de requete en param !

export default async function typePage({params }){
    let {type} = await params ;
    type = (type || "").trim().toLowerCase();
    let header ;

    switch(type){
        case "playlist":
            header = <p>Entrez l'identifiant d'une playlist</p> ;
            // constituer un compendium de playlist qui correspondent à differentes categories de nous meme
            break ;
        case "genre":
            // ici, afficher plutot les genre + une searchbox qui
            //  permet d'en selectionner un en partoculier
            header = <p>Rechercher un genre ^^</p> ;
            break ;
        case 'vs':
            return <VSMode /> ;
        case "search":
            header = <p>Rechercher un mot clé :D</p> ;
            break ;
    }

    return (
        <>
        <Link href="/jeu" className="underline">Choisir une autre catégorie</Link>
        {header}
        <Search type={type} />
        </>
    ) ;
}