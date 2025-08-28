import React from "react";
import styles from "./Schedule.module.scss";

const schedule = [
  { time: "10:15 PM - 10:20 PM", event: "Introduction by Organizers" },
  { time: "10:20 PM - 10:25 PM", event: "Presentation by Panelist", bold: "Panelist" },
  { time: "10:25 PM - 10:30 PM", event: "Presentation by Panelist", bold: "Panelist" },
  { time: "10:30 PM - 10:35 PM", event: "Presentation by Panelist", bold: "Panelist" },
  { time: "10:35 PM - 10:40 PM", event: "Presentation by Panelist", bold: "Panelist" },
  { time: "10:40 PM - 10:45 PM", event: "Presentation by Panelist", bold: "Panelist" },
  { time: "10:45 PM - 10:50 PM", event: "Presentation by Panelist", bold: "Panelist" },
  { time: "10:50 PM - 11:25 PM", event: "Panel Discussion and Q & A" },
  { time: "11:25 PM - 11:30 PM", event: "Closing by Organizers" }
];

const Schedule = () => (
  <div className={styles.scheduleBlock}>
    <h3 className={styles.scheduleTitle}>Schedule</h3>
    <table className={styles.scheduleTable}>
      <thead>
        <tr>
          <th>Time (Tentative)</th>
          <th>Event</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((item, idx) => (
          <tr key={idx}>
            <td>{item.time}</td>
            <td>
              {item.bold ? (
                <>
                  {item.event.split(item.bold)[0]}
                  <b>{item.bold}</b>
                  {item.event.split(item.bold)[1]}
                </>
              ) : (
                item.event
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Schedule;
