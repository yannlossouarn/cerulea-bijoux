/**
 * * Tarifs affichés dans la section "Tarifs" de la page d'accueil
 *
 * Pour modifier un tarif, changer la valeur "price" (en euros, TTC).
 * Si "price" est absent, le bloc affiche "Prix sur demande".
 */

// colliers
import collierCornalineCarte from "@/data/creations/cornaline-et-argent/collier-cornaline-argent-carte.webp";
import collierCornalinePorte from "@/data/creations/cornaline-et-argent/collier-cornaline-argent-porte-portrait.webp";
import collierGreenTartan from "@/data/creations/green-tartan/green-tartan-carte.webp";
import collierIndispensables from "@/data/creations/les-indispensables/les-indispensables-carte.webp";
import collierPinkAndPunk from "@/data/creations/pink-and-punk/pink-and-punk-carte.webp";

// petites broches
import coeurRose from "@/data/creations/coup-de-coeur/coup-de-coeur-porte.webp";
import petitFantome from "@/data/creations/petit-fantome/petit-fantome.webp";
import coeurBleu from "@/data/creations/coup-de-coeur-bleu/coup-de-coeur-bleu-dans-boite-plan-serre-carre.webp";
import poissonBleu from "@/data/creations/poissons-bleus/poissons-bleus-1.webp";
import poissonsBleus from "@/data/creations/poissons-bleus/ban-poissons-bleus.webp";
import poissonsEnBoites from "@/data/creations/comme-un-poisson-dans-l-eau/poissons-en-boites.webp";

// grandes broches
import chienOrange from "@/data/creations/nom-d-un-chien/nom-d-un-chien-orange.webp";
import chienBleu from "@/data/creations/nom-d-un-chien/nom-d-un-chien-bleu.webp";
import chienBleuEnvers from "@/data/creations/nom-d-un-chien/nom-d-un-chien-bleu-envers.webp";

export interface pricingImage {
	src: ImageMetadata; // imported image
	alt: string;
}

export interface pricingItem {
	name: string; // product name
	featured?: boolean; // if true, will be highlighted or otherwise featured
	price?: number; // en euros TTC. Si absent : "Prix sur demande"
	startingAt?: boolean; // if true, "À partir de" is shown above the price
	features: string[]; // list of features
	images: pricingImage[]; // images du diaporama, dans l'ordre d'affichage
}

// This is designed for 3 pricing items, but can be modified to support more
const pricingData: pricingItem[] = [
	{
		name: "Collier",
		featured: false,
		price: 15,
		startingAt: true,
		features: [
			"Pierres naturelles, perles miyuki",
			"Argent 925 ou inox doré à l'or 18K",
			"Longueur et fermoir adaptés à vos souhaits",
		],
		images: [
			{ src: collierCornalineCarte, alt: "Collier cornaline et argent" },
			{ src: collierGreenTartan, alt: "Collier Green Tartan" },
			{ src: collierIndispensables, alt: "Collier de la collection Les Indispensables" },
			{ src: collierPinkAndPunk, alt: "Collier Pink and punk" },
			{ src: collierCornalinePorte, alt: "Collier cornaline et argent porté" },
		],
	},
	{
		name: "Pin's",
		featured: true,
		price: 10,
		features: [
			"Broderie d'or : canetille et jaseron",
			"Montage en pin's",
			"Livré dans sa boîte décorée à la main",
		],
		images: [
			{ src: coeurRose, alt: "Broche Coup de cœur" },
			{ src: petitFantome, alt: "Pin's Petit fantôme" },
		],
	},
	{
		name: "Broche",
		featured: false,
		price: 25,
		features: [
			"Broderie d'or : canetille et jaseron",
			"Envers en tissu wax du Sénégal",
			"Livrée dans sa boîte décorée à la main",
		],
		images: [
			{ src: chienOrange, alt: "Broche Nom d'un chien ! orange" },
			{ src: chienBleu, alt: "Broche Nom d'un chien ! bleue" },
			{ src: chienBleuEnvers, alt: "Envers en tissu wax d'une broche Nom d'un chien !" },
			{ src: poissonBleu, alt: "Broche Poisson en marinière" },
			{ src: coeurBleu, alt: "Broche Coup de cœur bleu" },
			{ src: poissonsEnBoites, alt: "Broches Comme un poisson dans l'eau dans leurs boîtes" },
			{ src: poissonsBleus, alt: "Banc de broches Poissons en marinière" },
		],
	},
];

export default pricingData;
