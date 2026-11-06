/**
 * Reconstruit le site chaque nuit pour rafraîchir la galerie Instagram (publications, likes, commentaires, profil) :
 * le flux n'est lu qu'au build. NETLIFY_BUILD_HOOK = URL d'un build hook (Configuration > Build & deploy > Build hooks).
 */
export default async () => {
	const hook = process.env.NETLIFY_BUILD_HOOK;
	if (!hook) return console.warn("[galerie] NETLIFY_BUILD_HOOK absent, pas de rebuild");
	const reponse = await fetch(`${hook}?trigger_title=${encodeURIComponent("Rafraîchissement galerie Instagram")}`, { method: "POST" });
	console.log(`[galerie] build hook : ${reponse.status}`);
};

export const config = { schedule: "0 4 * * *" }; // 4 h UTC chaque jour
