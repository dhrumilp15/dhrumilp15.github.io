import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects";
import About from "@lekoarts/gatsby-theme-cara/src/components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";
import { useMediaQuery } from 'react-responsive';

const Cara = () => {
	const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
	const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
	let hero_factor: number = 1;
	let project_factor: number = 2;
	let about_factor: number = 1;
	let contact_factor: number = 1;
	if (isTabletOrMobileDevice) {
		hero_factor = 1;
		project_factor = 3;
		about_factor = 3;
		contact_factor = 1.5;
	}
	return (
	<Layout>
		<Parallax pages={5}>
			<Hero offset={0} factor={hero_factor} />
			<Projects offset={1} factor={project_factor} />
			<About offset={3} factor={about_factor} />
			<Contact offset={4} factor={contact_factor} />
		</Parallax>
	</Layout>
)
};

export default Cara;
