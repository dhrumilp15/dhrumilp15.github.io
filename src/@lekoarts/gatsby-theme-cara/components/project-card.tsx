/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import overlay from "../../../images/overlay-bg.png";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Video from './Video';

type ProjectCardProps = {
	link: string;
	title: string;
	children: React.ReactNode;
	bg: string;
	name: string;
};

const ProjectCard = ({ link, title, children, bg, name }: ProjectCardProps) => {
	const projectDemos = useStaticQuery(graphql`query {
		allFile(filter: {relativeDirectory: {eq: "projects"}}) {
		  edges {
			node {
			  name
			  publicURL
			  childImageSharp {
				fluid {
				  ...GatsbyImageSharpFluid
				}
			  }
			}
		  }
		}
	  }`);
	var picture = projectDemos.allFile.edges.find(
		pic => pic.node.name === name
	);
	var div: JSX.Element = <Video videoSrcURL={picture.node.publicURL} videoTitle={title}/>;
	if (picture.node.childImageSharp != null) {
		div = <Img
				sx={{ display: `flex`, justifyContent: `center` }}
				fluid={picture.node.childImageSharp.fluid}
				alt={title}
			/>;
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
			<div
			>
				{div}
			</div>
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
