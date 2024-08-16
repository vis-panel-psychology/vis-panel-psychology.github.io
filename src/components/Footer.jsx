import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<div>
			<h3 className={styles.titleWrapper}>{"Time and Place"}</h3>
			<p>
				TBA.
			</p>
			<div className={styles.realFooter}>
				<h6>
				{"Copyright © 2024 Hyeon Jeon"}
				</h6>
			</div>
		</div>
	)
}

export default Footer;