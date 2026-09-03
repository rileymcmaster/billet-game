import React from "react";
import { Link } from "react-router-dom";

import VideoEmbed from "../components/VideoEmbed";

const videos = [
	{
		title: "Hereafter (Live at Green Auto)",
		embed: 'https://www.youtube.com/embed/QNtDjMIVoCA?si=Esuwl-6RxCeXH5B_',
		year: "August 2026",
		link: null,
	},
	{
		title: "SPiLL the REST",
		embed: "https://www.youtube.com/embed/d23DafFU1M8?si=ZSbLubHqUQ9R3fgt",
		year: "2026",
		link: null,
	},
	{
		title: "WAVE",
		embed: "https://www.youtube.com/embed/VOW0T_XP4i4?si=HZY128u1ALMPzPGX",
		year: "2026",
		link: null,
	},
	{
		title: "FORTUNES",
		embed: "https://www.youtube.com/embed/m_gxWheaDyE?si=R8C35a9y3g0AqRCB",
		year: "2025",
		link: null,
	},
	{
		title: "CCTV Le QUARTIER",
		embed: "https://www.youtube.com/embed/peogIPYJb3I?si=b_5UiqGcuJv6ZH8W",
		year: "2025",
		link: null,
	},
	{
		title: "ALL EYES",
		embed: "https://www.youtube.com/embed/yHOF9k8JdWA?si=hIYNG6NuhpwlIP0t",
		year: "2025",
		link: { url: "/game", text: "Interactive music video, play it here" },
	},
	{
		title: "SAME OLD STORY",
		embed: "https://www.youtube.com/embed/gVCaYuzIoCM?si=qHjP2egGF7-s94aN",
		year: "2024",
		link: null,
	},
	{
		title: "STOPGAP",
		embed: "https://www.youtube.com/embed/4aYycMgZsmE?si=xqrrFBenmSUeM7au",
		year: "2020",
		link: null,
	},
	{
		title: "DEPRESSION",
		embed: "https://www.youtube.com/embed/MBveYe6H38c?si=awHj61YzX47Ipe6C",
		year: "2020",
		link: null,
	},
];

const VideoList = () => {
	return (
		<>
			<h3>videos</h3>
			<ul className="video-list">
				{videos.map(({ title, embed, year, link }) => (
					<li key={title}>
						<VideoEmbed src={embed} />
						<p>{title}</p>
						<span className="small-text">{year}</span>
						{link && <Link to={link.url}>{link.text}</Link>}
					</li>
				))}
			</ul>
		</>
	);
};

export default VideoList;
