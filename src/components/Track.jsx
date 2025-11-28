// pour afficher des musiques lol
export default function Track({ track }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-[100%]
        bg-[var(--background)] shadow border border-solid border-[var(--foreground)] rounded-lg">
        <div className="mx-auto w-2xs flex flex-col gap-3 items-center" key={track.id}>
          <img className="w-full h-auto shadow-xl border border-solid border-[var(--foreground)] rounded-lg"
               src={track.album.cover_xl} alt={`Couverture de l'album: ${track.album.title}`} />
          <div className="text-center flex flex-col items-center">
            <p className="text-lg text-(--text)">{track.title}</p>
            <p className="text-sm text-(--gray)">{track.artist.name}</p>
          </div>
          <a href={track.link} target="_blank" className="bg-[var(--accent)] hover:bg-[var(--accent-lighter)] text-[var(--white)]
          cursor-pointer px-4 py-2 rounded font-bold uppercase active:text-gray-50 duration-300">écouter sur Deezer</a>
        </div>
    </div>
  );
}