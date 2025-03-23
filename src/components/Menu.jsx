import { AnimatePresence, motion } from "motion/react";
import React from "react";
import Overlay from "./Overlay";
import { links } from "../data";

const Menu = ({ show, onClose }) => {
	return (
		<>
			<Overlay show={show} />
			<AnimatePresence>
				{show && (
					<motion.div className="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<button className="menu__close-btn" onClick={onClose}>
							X
						</button>
						<div className="menu__content">
							<p>"All Eyes" from Billet's debut album Debris. Stream it now</p>
							<ul>
								{links.map((link) => {
									return (
										<li key={link.href}>
											<a href={link.href}>{link.title}</a>
										</li>
									);
								})}
							</ul>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Menu;
