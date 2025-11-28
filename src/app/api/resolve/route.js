export async function POST(request) {
    try {
        const { link } = await request.json();

        const response = await fetch(link, {
            method: "HEAD",
            redirect: "follow",
        });

        const finalUrl = response.url;
        const match = finalUrl.match(/playlist\/(\d+)/);

        if (!match) {
            return Response.json({ error: "No playlist ID found" }, { status: 400 });
        }
        return Response.json({ id: match[1] });
    } catch (err) {
        console.error("Erreur API resolve:", err);
        return Response.json({ error: "Failed to resolve link" }, { status: 500 });
    }
}
