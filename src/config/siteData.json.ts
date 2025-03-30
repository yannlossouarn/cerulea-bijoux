export interface SiteDataProps {
	name: String;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
		instagram: string;
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Cerulea Bijoux",
	// Your website's title and description (meta fields)
	title: "Cerulea Bijoux - Création de bijoux à la demande",
	description:
		"Je crée des bijoux et accessoires de mode uniques, à la demande.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Cerulea Bijoux",
		email: "contact@cerulea-bijoux.fr",
		twitter: "ceruleabijoux",
		instagram: "ceruleabijoux"
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "",
	},
};

export default siteData;
