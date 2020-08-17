/**@jsx jsx */
import { jsx } from "theme-ui";
import {
	FaGithub,
	FaLinkedinIn,
	FaRegEnvelope,
	FaYoutube,
} from "react-icons/fa";

const Social = (props) => {
	const component = [
		<FaRegEnvelope />,
		<FaGithub />,
		<FaLinkedinIn />,
		<FaYoutube />,
	];
	return (
		<a
			href={props.link}
			target="_blank"
			rel="noopener noreferrer"
			sx={{
				"&:hover": {
					color: `white !important`,
					transform: `translateY(-5px)`,
					boxShadow: `xl`,
				},
			}}
		>
			{component[props.index]}
		</a>
	);
};

export default Social;
