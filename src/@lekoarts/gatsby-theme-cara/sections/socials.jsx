/**@jsx jsx */
import { useColorMode, jsx } from "theme-ui";
import {
	FaGithub,
	FaLinkedinIn,
	FaRegEnvelope,
	FaYoutube,
	FaTwitch,
} from "react-icons/fa";

const Social = () => {
	const component = [
		[<FaRegEnvelope />, "mailto: dhrumilp15@gmail.com"],
		[<FaGithub />, "https://github.com/dhrumilp15"],
		[<FaLinkedinIn />, "https://www.linkedin.com/in/dhrumilp15/"],
		[<FaYoutube />, "https://www.youtube.com/channel/UCE6avX_eOjxGlpYCWuVn0Xw"],
		[<FaTwitch />, "https://www.twitch.tv/dhrumilp15"],
	];
	const [colorMode, setColorMode] = useColorMode()
	const icons = component.map((icon) => (
		<a
			href={icon[1]}
			target="_blank"
			rel="noopener noreferrer"
			sx={{
				"&:hover": {
					color: colorMode === `dark` ? `white !important` : `black !important`,
					transform: `translateY(-5px)`,
					boxShadow: `xl`,
				},
			}}
		>
			{icon[0]}
		</a>
	));
	return (
		<div
			sx={{
				display: `flex`,
				justifyContent: `space-around`,
				width: ["100%", "50%", "25%"],
			}}
		>
			{icons}
		</div>
	);
};

export default Social;
