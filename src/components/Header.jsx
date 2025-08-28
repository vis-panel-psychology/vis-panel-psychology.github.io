import React from "react";

import styles from "./Header.module.scss";

import parse from 'html-react-parser';




const Header = () => {

	return (
		<div>
			<img src="./imgs/vis2025_logo.svg" alt="IEEE VIS 2025 Logo" className={styles.logo} />
			<div className={styles.headerWrapper}>
				<h2>{parse("What Does Psychology Really Mean to Visualization Research?")}</h2>
				<h3>{"Towards PsychXVis and VisXPsych"}</h3>
			</div>
				<h3>{"Panel @ IEEE VIS 2025"}</h3>
			<p>
				{parse("This panel aims to discuss the critical yet underdeveloped relationship between psychology and visualization (VIS) research. While VIS frequently draws upon psychological principles—particularly in perception and cognition—current integration remains shallow, often relying on heuristics and anecdotal evidence rather than rigorous scientific foundations. This gap hinders the development of generalizable design principles, limits consideration of human factors, and risks creating technically advanced but ineffective or misleading visualizations. Simultaneously, psychology's growing interest in using visualization as an experimental tool presents future potential for bidirectional collaboration. <br/><br/>We anticipate that its output can catalyze deeper, actionable engagement between two fields, including: (1) Promote a psychologically grounded understanding of effective VIS design; (2) Advocate for empirically rigorous, theory-based VIS research; (3) Identify opportunities for VIS to transform psychological inquiry; and (4) Inspire interdisciplinary research directions. Panelists—visualization experts spanning backgrounds on experimental psychology, behavioral psychology, cognitive science, vision science, decision-making, social science, to human personality—will discuss bridging disciplinary divides in publication norms, methods, and terminology. Their diverse backgrounds (e.g., color semantics, uncertainty communication, cognitive interfaces) ensure a comprehensive exploration of how psychology can transform VIS from rule-of-thumb practices to evidence-based principles, while VIS offers novel methodologies for psychological discovery. The discussion responds to rising interest evidenced by past initiatives integrating vision science, a foundational Visualization Psychology book, and an upcoming Dagstuhl seminar, positioning IEEE VIS conferences as vital hubs for this cutting-edge interdisciplinary advancement.")}
			</p>
		</div>
	)
}

export default Header;