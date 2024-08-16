import React from "react";

import panelist from "../people/panelist.json";
import organizer from "../people/organizers.json";
import Person from "./Person";

import styles from "./People.module.scss";

const People = (props) => {

	const title = props.title;

	let people;

	if (title === "Panelists") {
		people = panelist;
	}
	else {
		people = organizer;
	}

	return (
		<div>
			<h3 className={styles.titleWrapper}>{title}</h3>
			<div className={styles.peopleWrapper}>
				{people.map((person, index) => {
					return (
						<div key={index}>
							<Person name={person.name} bio={person.bio} img={person.image} affiliation={person.affiliation} email={person.email} />
						</div>
					)})}
		</div>
		</div>
	)
}

export default People;