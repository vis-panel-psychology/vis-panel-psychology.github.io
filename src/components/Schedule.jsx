import React from "react";
import styles from "./Schedule.module.scss";

const schedule = [
  { time: "3:45 PM - 3:50 PM", event: "Introduction by Organizers" },
  { time: "3:50 PM - 3:55 PM", event: "Presentation by Panelist", bold: "Panelist" },
  { time: "3:55 PM - 4:00 PM", event: "Presentation by Panelist", bold: "Panelist" },
  { time: "4:00 PM - 4:05 PM", event: "Presentation by Panelist", bold: "Panelist" },
  { time: "4:05 PM - 4:10 PM", event: "Presentation by Panelist", bold: "Panelist" },
  { time: "4:10 PM - 4:15 PM", event: "Presentation by Panelist", bold: "Panelist" },
  { time: "4:15 PM - 4:55 PM", event: "Panel Discussion and Q & A" },
  { time: "4:55 PM - 5:00 PM", event: "Closing by Organizers" }
];

const Schedule = () => (
  <div className={styles.scheduleBlock}>
    <h3 className={styles.scheduleTitle}>Schedule</h3>
    <table className={styles.scheduleTable}>
      <thead>
        <tr>
          <th>Time</th>
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
