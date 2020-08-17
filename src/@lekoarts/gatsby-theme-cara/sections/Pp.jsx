/**@jsx jsx */
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { jsx } from "theme-ui";

export default () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "fbdp_square.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 400, maxHeight: 400) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<Img
			sx={{
				borderRadius: `50%`,
				width: `250px`,
				height: `250px`,
			}}
			fluid={data.file.childImageSharp.fluid}
			alt="Seems like I can't be seen right now"
		/>
	);
};
