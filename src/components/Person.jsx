import React from "react";

import styles from "./Person.module.scss";

const Person = (props) => {

	const name = props.name;
	const bio = props.bio;
	const img = props.img;
	const affiliation = props.affiliation;
	const email = props.email;

	const mouseEnterEvent = (e) => {
		document.getElementById(`tooltip-${name}`).style.opacity = "1";
		e.target.style.opacity = "1";
	}

	const mouseLeaveEvent = (e) => {
		document.getElementById(`tooltip-${name}`).style.opacity = "0";
		e.target.style.opacity = "0.9";
	}

	const mouseMoveEvent = (e) => {
		document.getElementById(`tooltip-${name}`).style.left = `${e.pageX + 20}px`;
		document.getElementById(`tooltip-${name}`).style.top = `${e.pageY + 20}px`;
	}




	return (
		<div>
			<img 
				src={`/imgs/${img}`} 
				alt={name} 
				onMouseEnter={mouseEnterEvent}
				onMouseMove={mouseMoveEvent}
				onMouseLeave={mouseLeaveEvent}
				style={{opacity: "0.9"}}
			/>
			<h4>{name}</h4>
			<h5>{affiliation}</h5>

			<div 
				className={styles.tooltip} 
				id={`tooltip-${name}`}
			>
				{bio}
			</div>

		</div>
	)
}

export default Person;