import BlindtestClient from "@/app/jeu/BlindtestClient";

// exemple de url:
// http://127.0.0.1:3000/jeu/search/feur?limit=3&minRank=200&maxRank=300

export default async function BlindtestPage({ params, searchParams }) {
    params = await params;

    const type = (params.type || "").trim().toLowerCase();
    const id = (params.id || "").trim().toLowerCase();
    const limit = parseInt(searchParams?.limit) || 25;
    const minRank = parseInt(searchParams?.minRank) || 0;
    const maxRank = parseInt(searchParams?.maxRank) || 1000000;

    return <BlindtestClient type={type} id={id} limit={limit} minRank={minRank} maxRank={maxRank} />;
}
