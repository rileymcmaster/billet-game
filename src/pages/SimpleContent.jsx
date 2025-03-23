import React from "react";
import { links } from "../data";

const SimpleContent = () => {
	return (
		<section>
			<h1>Billet</h1>
			<h2>Listen to the debut album DEBRIS now</h2>
			<div className="link-wrapper">
				{links.map(({ title, href }) => (
					<a key={title} href={href}>
						{title}
					</a>
				))}
			</div>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/m_gxWheaDyE?si=R8C35a9y3g0AqRCB"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen></iframe>
		</section>
	);
};

export default SimpleContent;
