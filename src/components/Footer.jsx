import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<div>
			<div className={styles.realFooter}>
				<h6>
				{"Copyright © 2025 Arran Zeyu Wang. Originally designed by"} <a href='https://www.hyeonjeon.com/'>Hyeon Jeon</a>
				</h6>
			</div>
		</div>
	)
}

export default Footer;