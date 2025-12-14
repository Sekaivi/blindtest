"use client";
import BlindtestLoader from "@/components/Loading";
import BlindtestJeu from "@/app/jeu/BlindtestJeu";
import GetTracks from "@/utils/GetTracks";

export default function BlindtestClient({ type, id , limit , minRank , maxRank }) {

  // query tests !
  // pour les playlists: id = 11256924004
  // c'est quoi pour les genre ? 116
  const validTypes = ['playlist', 'genre', 'search'];
  if (validTypes.includes(type)) {
    try {
      const songData = GetTracks(type, id , limit , minRank , maxRank);
      const error = songData.error;
      const loading = songData.loading;
      const tracks = songData.tracks;
      return (
        <>
          {loading && (
            <div className="flex flex-col items-center">
              <BlindtestLoader />
            </div>
          )}
          {error &&
            <p className="text-red-500">Erreur : {error}</p>
          }

          {!loading && !error && tracks.length === 0 && (
              <div className="flex flex-col items-center">
                <BlindtestLoader/>
              </div>
          )}

          {!loading && !error && tracks.length > 0 && (
              <BlindtestJeu songs={tracks} />
          )}
        </>
      ) ;
    } catch (e) {
      console.error(e);
      return <p>La requête n'a pas pu aboutir.</p>
    }
  } else {
    return <p>Type non reconnu</p>;
  }
}