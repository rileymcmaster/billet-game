import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const imageMain = "/assets/billet-headshot-1.webp";
import { bioLinks, biography } from "../data";
import VideoList from "../components/VideoList";

const Bio = () => {
	return (
		<Suspense>
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
						<div dangerouslySetInnerHTML={{__html: biography}}></div>
					</div>

					<div className="bio__details__releases">
						<h3>releases</h3>
						<ul>
							<li>
								2026 - Spill The Rest <sup className="em">single</sup>
							</li>
							<li>
								2026 - Wave <sup className="em">single</sup>
							</li>
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
						<img src={imageMain} height="265" alt="freak standing in a warped reality"></img>
					</div>
				</div>
				<VideoList />
			</section>
				
		</Suspense>
	);
};

export default Bio;
