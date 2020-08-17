/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import overlay from "../../../images/overlay-bg.png";
import PorknifeHigh from "../../../images/projects/PorknifeHigh.mp4";
import drone from "../../../images/projects/drone.mp4";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

type ProjectCardProps = {
	link: string;
	title: string;
	children: React.ReactNode;
	bg: string;
};

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => {
	const assign = {
		"Bacterial Op-Amps": "results",
		"CC Extractor": "ccextractor",
	};

	const query = useStaticQuery(graphql`
		query {
			allFile(
				filter: {
					extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
					relativeDirectory: { eq: "projects" }
				}
			) {
				edges {
					node {
						relativeDirectory
						name
						relativePath
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
	`);
	var picture = query.allFile.edges.find(
		(pic) => pic.node.name === assign[title]
	);
	var div;
	if (picture != null) {
		div = (
			<Img
				sx={{ display: `flex`, justifyContent: `center` }}
				fluid={picture.node.childImageSharp.fluid}
				alt={title}
			/>
		);
	} else {
		var src = drone;
		if (title === "PorkNife") src = PorknifeHigh;
		div = (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<video
					sx={{ width: `100% !important`, height: `auto !important` }}
					loop
					autoPlay
					muted
					preload="auto"
				>
					<source src={src} type="video/mp4" />
				</video>
			</div>
		);
	}

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer noopener"
			sx={{
				width: `100%`,
				boxShadow: `lg`,
				position: `relative`,
				textDecoration: `none`,
				borderRadius: `lg`,
				px: 4,
				py: [4, 5],
				color: `white`,
				background: bg || `none`,
				transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
				"&:hover": {
					color: `white !important`,
					transform: `translateY(-5px)`,
					boxShadow: `xl`,
					background: `url(${overlay}) repeat`,
				},
			}}
		>
			<div>{div}</div>
			<div sx={{ opacity: 0.75, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>
				{children}
			</div>
			<div
				sx={{
					textTransform: `uppercase`,
					letterSpacing: `wide`,
					pt: 4,
					fontSize: [4, 5],
					fontWeight: `medium`,
					lineHeight: 1,
				}}
			>
				{title}
			</div>
		</a>
	);
};

export default ProjectCard;
