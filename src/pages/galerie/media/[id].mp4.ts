/**
 * Vidéos Instagram de la galerie, copiées dans le site au build (/galerie/media/<id>.mp4) :
 * les URL du CDN Instagram sont signées et expirent au bout de quelques jours.
 */
import type { APIRoute, GetStaticPaths } from "astro";
import { fluxInstagram } from "@js/instagram";

export const getStaticPaths = (async () => {
	const profil = await fluxInstagram();
	return (profil?.media?.data ?? [])
		.filter((m) => m.media_type === "VIDEO" && m.media_url)
		.map((m) => ({ params: { id: m.id }, props: { url: m.media_url! } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
	const reponse = await fetch(props.url).catch(() => null);
	if (!reponse?.ok) {
		// un échec ne doit pas bloquer le déploiement : la modale affichera l'image de couverture
		console.warn(`[galerie] vidéo inaccessible (${reponse?.status ?? "réseau"})`);
		return new Response(null);
	}
	return new Response(await reponse.arrayBuffer(), { headers: { "Content-Type": "video/mp4" } });
};
