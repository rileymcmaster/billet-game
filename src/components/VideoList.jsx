import React from "react";
import { Link } from "react-router-dom";

import VideoEmbed from "../components/VideoEmbed";
const sosVidSrc = "https://www.youtube.com/embed/gVCaYuzIoCM?si=qHjP2egGF7-s94aN";
const fortunesVidSrc = "https://www.youtube.com/embed/m_gxWheaDyE?si=R8C35a9y3g0AqRCB";
const cctvVidSrc = "https://www.youtube.com/embed/peogIPYJb3I?si=b_5UiqGcuJv6ZH8W";
const allEyesVidSrc = "https://www.youtube.com/embed/yHOF9k8JdWA?si=hIYNG6NuhpwlIP0t";
const depressionVidSrc = "https://www.youtube.com/embed/MBveYe6H38c?si=awHj61YzX47Ipe6C";
const stopgapVidSrc = "https://www.youtube.com/embed/4aYycMgZsmE?si=xqrrFBenmSUeM7au"
const waveVidSrc = "https://www.youtube.com/embed/VOW0T_XP4i4?si=HZY128u1ALMPzPGX";

const VideoList = () => {
	return (
		<>
			<h3>videos</h3>
			<ul className="video-list">
				<li>
					<VideoEmbed src={waveVidSrc} />
					<p>Wave</p><span className="small-text">2026</span>
				</li>
				<li>
					<VideoEmbed src={fortunesVidSrc} />
					<p>Fortunes</p><span className="small-text">2025</span>
				</li>
				<li>
					<VideoEmbed src={cctvVidSrc} />
					<p>CCTV le quartier</p>
					<span className="small-text">2025</span>
				</li>
				<li>
					<VideoEmbed src={allEyesVidSrc} />
					<p>All Eyes</p>
					<span className="small-text">2025</span>
					<Link to="/game">Interactive music video, play it here</Link>
				</li>
				<li>
					<VideoEmbed src={sosVidSrc} />
					<p>Same Old Story</p>
					<span className="small-text">2024</span>
				</li>
				<li>
					<VideoEmbed src={stopgapVidSrc} />
					<p>Stopgap</p>
					<span className="small-text">2025</span>
				</li>
				<li>
					<VideoEmbed src={depressionVidSrc} />
					<p>Depression</p>
					<span className="small-text">2020</span>
				</li>
			</ul>
		</>
	);
};

export default VideoList;
