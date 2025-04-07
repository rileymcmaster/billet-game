import React from "react";
import { links } from "../data";
import { Link } from "react-router-dom";

const SimpleContent = () => {
	return (
		<section>
			<h1>Billet</h1>
			<h3>
				<Link to="/game">Play the "All Eyes" interactive music video</Link>
			</h3>
			<h2>The debut album Debris is out now</h2>
			<div className="link-wrapper">
				{links.map(({ title, href }) => (
					<a key={title} href={href}>
						{title}
					</a>
				))}
			</div>
			<p className="small-text">
				<a href="mailto:billetmusic@gmail.com">billetmusic@gmail.com</a> 2025
			</p>

			<div className="iframe-wrapper">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/m_gxWheaDyE?si=R8C35a9y3g0AqRCB"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen></iframe>
			</div>
		</section>
	);
};

export default SimpleContent;
