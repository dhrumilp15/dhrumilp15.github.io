require(`dotenv`).config({
	path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
	siteMetadata: {
		// You can overwrite values here that are used for the SEO component
		// Of course you can also add new values here to query them like usual
		// See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
		siteTitleAlt: `Dhrumil Patel`,
	},
	plugins: [
			{
				resolve: `gatsby-transformer-remark`,
				options: {
					plugins: [
						{
							resolve: "gatsby-remark-embed-video",
							options: {
							width: 800,
							ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
							height: 400, // Optional: Overrides optional.ratio
							related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
							noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
							loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
							urlOverrides: [
								{
								id: "youtube",
								embedURL: videoId =>
									`https://www.youtube-nocookie.com/embed/${videoId}`,
								},
							], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
							containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
							iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
							},
						},
						{
							resolve: `gatsby-remark-images`,
							options: {
								// It's important to specify the maxWidth (in pixels) of
								// the content container as this plugin uses this as the
								// base for generating different widths of each image.
								maxWidth: 590,
							},
						},
						{
							resolve: `gatsby-remark-responsive-iframe`,
							options: {
								wrapperStyle: `margin-bottom: 1.0725rem`,
							},
						},
					],
				},
			},
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
			`gatsby-plugin-theme-ui`,
	].filter(Boolean),
};
