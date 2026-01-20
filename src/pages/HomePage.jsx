import React, { Suspense } from "react";
import { links } from "../data";
import { Link } from "react-router-dom";
import VideoList from "../components/VideoList";

const HomePage = () => {
	return (
		<Suspense>
			<section className="homepage">
				<h1>Billet</h1>
				<h3 className="highlight">
					<Link to="/game">Play the "All Eyes" interactive music video</Link>
				</h3>
				<h2>Montreal synth punk</h2>
				<div className="link-wrapper">
					<Link to="/bio" discover="none">
						•bio•
					</Link>
					{links.map(({ title, href }) => (
						<a key={title} href={href}>
							{title}
						</a>
					))}
				</div>
				<p className="small-text">
					<a href="mailto:billetmusic@gmail.com">billetmusic@gmail.com</a> 2026
				</p>

				<section className="videos">
				<VideoList />
					</section>
			</section>
		</Suspense>
	);
};

export default HomePage;
