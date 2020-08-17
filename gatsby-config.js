require(`dotenv`).config({
	path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
	pathPrefix: "/dhrumilp15.github.io",
	siteMetadata: {
		// You can overwrite values here that are used for the SEO component
		// Of course you can also add new values here to query them like usual
		// See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
		siteTitleAlt: `Dhrumil Patel`,
	},
	plugins: [
		{
			resolve: `@lekoarts/gatsby-theme-cara`,
			// See the theme's README for all available options
			options: {},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS_ID,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Cara - @lekoarts/gatsby-theme-cara`,
				short_name: `Cara`,
				description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
				start_url: `/`,
				background_color: `#141821`,
				theme_color: `#f6ad55`,
				display: `standalone`,
				icons: [
					{
						src: `/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
				],
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-netlify`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 590,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
			},
		},
		shouldAnalyseBundle && {
			resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
			options: {
				analyzerMode: `static`,
				reportFilename: `_bundle.html`,
				openAnalyzer: false,
			},
		},
	].filter(Boolean),
};
