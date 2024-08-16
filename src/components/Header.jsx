import React from "react";

import styles from "./Header.module.scss";

import parse from 'html-react-parser';




const Header = () => {

	return (
		<div>
			<img src="./imgs/vis2024_logo.png" alt="IEEE VIS 2024 Logo" className={styles.logo} />
			<div className={styles.headerWrapper}>
				<h2>{parse("(Yet Another) Evaluation Needed?<br/>A Panel Discussion on Evaluation Trends in Visualization")}</h2>
			</div>
				<h3>{"Panel @ IEEE VIS 2024"}</h3>
			<p>
				{parse("In the evolving field of visualization, rigorous evaluation is essential for validating new techniques and ensuring the effectiveness of existing practices. However, the increasing number of evaluations in academic papers raises questions about the sustainability, feasibility, and rigor of these practices. This panel gathers experts from visualization, visual analytics, empirical studies, HCI, and cognitive psychology to explore how many evaluations are necessary to validate research contributions effectively. <br/><br/>Panelists will discuss the challenges of balancing thorough evaluation with practical constraints like time, budget, and resources. By examining different evaluation types and their strategic use, this panel aims to guide researchers in designing evaluations that reflect the true merits of their work, rather than simply adhering to current trends.")}
			</p>
		</div>
	)
}

export default Header;