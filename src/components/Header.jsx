import React from "react";

import styles from "./Header.module.scss";

import parse from 'html-react-parser';




const Header = () => {

	return (
		<div>
			<img src="./imgs/vis2025_logo.svg" alt="IEEE VIS 2025 Logo" className={styles.logo} />
			<div className={styles.headerWrapper}>
				<h2>{parse("What Does Psychology Really Mean to Visualization Research? ")}<span  className={styles.smallHeader}>{"Towards PsychXVis and VisXPsych"}</span></h2>
			</div>
				<h3>{"Panel @ IEEE VIS 2025"}</h3>
				<h3 className={styles.dateWrapper}>{"Date, 2025 Time CEST (GMT+2)"}</h3>
			<p>
				{parse("This panel aims to discuss the critical yet underdeveloped relationship between psychology and visualization (VIS) research. While VIS frequently draws upon psychological principles—particularly in perception and cognition—current integration remains shallow, often relying on heuristics and anecdotal evidence rather than rigorous scientific foundations. This gap hinders the development of generalizable design principles, limits consideration of human factors, and risks creating technically advanced but ineffective or misleading visualizations. Simultaneously, psychology's growing interest in using visualization as an experimental tool presents future potential for bidirectional collaboration.")}
			</p>
		</div>
	)
}

export default Header;