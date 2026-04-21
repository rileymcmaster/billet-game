import React from "react";

const VideoEmbed = ({ src }) => {
	return (
		<div className="iframe-wrapper">
			<iframe
				width="560"
				height="420"
				src={src}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen></iframe>
		</div>
	);
};

export default VideoEmbed;
