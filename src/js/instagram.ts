/**
 * Flux Instagram de @ceruleabijoux (profil + dernières publications), lu une seule fois par build
 * avec le token de Page (INSTAGRAM_TOKEN, jamais exposé côté navigateur). Sans token ou en cas d'erreur : null.
 */
const INSTAGRAM_ID = "17841470840190885"; // identifiant public du compte

const FIELDS =
	"username,name,biography,website,profile_picture_url,followers_count,follows_count,media_count," +
	"media.limit(24){caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count," +
	"children{media_type,media_url,thumbnail_url},comments{text,timestamp,replies{text,timestamp}}}";

export interface Commentaire {
	text: string;
	timestamp: string;
	replies?: { data: Commentaire[] };
}
export interface Media {
	id: string;
	caption?: string;
	media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
	media_url?: string;
	thumbnail_url?: string;
	permalink: string;
	timestamp: string;
	like_count?: number;
	comments_count?: number;
	children?: { data: { media_type: string; media_url?: string; thumbnail_url?: string }[] };
	comments?: { data: Commentaire[] };
}
export interface Profil {
	username: string;
	name?: string;
	biography?: string;
	website?: string;
	profile_picture_url?: string;
	followers_count?: number;
	follows_count?: number;
	media_count?: number;
	media?: { data: Media[] };
}

let promesse: Promise<Profil | null> | undefined;

export function fluxInstagram(): Promise<Profil | null> {
	promesse ??= (async () => {
		const token = import.meta.env.INSTAGRAM_TOKEN;
		if (!token) return null;
		try {
			const url = `https://graph.facebook.com/v21.0/${INSTAGRAM_ID}?fields=${encodeURIComponent(FIELDS)}&access_token=${encodeURIComponent(token)}`;
			const reponse = await (await fetch(url)).json();
			if (!reponse.username) throw new Error(reponse.error?.message ?? "réponse invalide");
			return reponse as Profil;
		} catch (e) {
			console.warn(`[galerie] flux Instagram indisponible : ${(e as Error).message}`);
			return null;
		}
	})();
	return promesse;
}
