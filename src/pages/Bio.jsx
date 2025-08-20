import React from "react";
import { Link } from "react-router-dom";
import VideoEmbed from "../components/VideoEmbed";
const imageMain = "/assets/billet-headshot.webp";
const sosVidSrc = "https://www.youtube.com/embed/gVCaYuzIoCM?si=qHjP2egGF7-s94aN";
const fortunesVidSrc = "https://www.youtube.com/embed/m_gxWheaDyE?si=R8C35a9y3g0AqRCB";
const allEyesVidSrc = "https://www.youtube.com/embed/yHOF9k8JdWA?si=hIYNG6NuhpwlIP0t";
const depressionVidSrc = "https://www.youtube.com/embed/MBveYe6H38c?si=awHj61YzX47Ipe6C";
import { bioLinks, biography } from "../data";

const Bio = () => {
	return (
		<section className="bio">
			<div className="bio__header">
				<h1 className="bio__title small">
					<Link to={"/"}>Billet</Link>
				</h1>
				<ul className="bio__links">
					{bioLinks.map((link) => (
						<li className="bio-link" key={link.href}>
							<a target="_blank" href={link.href}>
								{link.title}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="bio__details">
				<div className="bio__details__bio">
					<h3>bio</h3>
					{biography.map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</div>

				<div className="bio__details__releases">
					<h3>releases</h3>
					<ul>
						<li>
							2024 - Debris <sup className="em">LP</sup>
						</li>
						<li>
							2021 - Conversations <sup className="em">single</sup>
						</li>
						<li>
							2020 - Billet <sup className="em">EP</sup>
						</li>
					</ul>
				</div>
				<div className="bio__details__image-wrapper">
					<img src={imageMain} alt="freak standing in a warped reality"></img>
				</div>
			</div>

			<h3>videos</h3>
			<ul className="video-list">
				<li>
					<VideoEmbed src={fortunesVidSrc} />
					<p>Fortunes</p>
				</li>
				<li>
					<VideoEmbed src={allEyesVidSrc} />
					<p>All Eyes</p>
					<Link to="/game">Interactive music video, play it here</Link>
				</li>
				<li>
					<VideoEmbed src={sosVidSrc} />
					<p>Same Old Story</p>
				</li>
				<li>
					<VideoEmbed src={depressionVidSrc} />
					<p>Depression</p>
				</li>
			</ul>
		</section>
	);
};

export default Bio;
