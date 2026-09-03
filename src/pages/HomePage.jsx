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
				<h2>Montreal electronic rock</h2>
				<div className="link-wrapper">
					
					<Link to="/bio" discover="none">
						bio
					</Link>
					&nbsp;•&nbsp;
					<a className="homepage__email" href="mailto:person@billetmusic.ca">
						person@billetmusic.ca
					</a>
				</div>

				<div className="link-wrapper">
					{links.map(({ title, href }, i) => (
						<p key={title} className="small-link">
						<a  href={href}>
							{title}
							</a>
							{i < links.length - 1 && " • "}
						</p>
					))}
				</div>

				<section className="videos">
					<VideoList />
				</section>
			</section>
		</Suspense>
	);
};

export default HomePage;
