import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Projects from "../components/projects";
import About from "@lekoarts/gatsby-theme-cara/src/components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";

const Cara = () => (
	<Layout>
		<Parallax pages={5}>
			<Hero offset={0} factor={1} />
			<About offset={3} factor={1.5} />
			<Projects offset={1} factor={2.5} />
			<Contact offset={4} factor={1} />
		</Parallax>
	</Layout>
);

export default Cara;
