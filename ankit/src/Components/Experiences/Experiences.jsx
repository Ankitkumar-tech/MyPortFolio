import React, { useContext } from "react";
import styles from "./Experiences.module.css";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
// import styles from './Experiences.module.css';

const Experiences = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div className="ab">
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Experience
      </h1>
      <div className={styles.borderBottom} />

      <div className={styles.container}>
        <div className={styles.position}>
          Software Engineer <a href=""> Masai School ,Banglore</a>
        </div>
        <div className={styles.date}>Sep 2022 - Current</div>
        <fieldset className={styles.responsibilites}>
          <legend>
            <h3> Roles & responsibilites </h3>
          </legend>
          <ul>
            <li>
              Engineered and maintained LMS dashboard interfaces using React and
              TypeScript.
            </li>
            <li>
              Deployed real-time notifications using RTK Query, boosting user
              engagement by 40%
            </li>
            <li>
              Collaborated closely with multidisciplinary teams to gather
              requirements, conduct feature enhancements
            </li>
            {/* <li>Etp operation and monitoring</li> */}
          </ul>
        </fieldset>
      </div>

      <br />

      <div className={styles.container}>
        <div className={styles.position}>
          Instructional Associate <a href="/">Masai School</a>
        </div>
        <div className={styles.date}>May 2022 - Sep-2022</div>
        <fieldset className={styles.responsibilites}>
          <legend>
            <h3> Roles & responsibilites </h3>
          </legend>
          <ul>
            <li>
              Delivered 100+ group and 500+ one-on-one sessions on DSA, React,
              and advanced JavaScript to 800+ students within the timeline.
            </li>
            <li>
              Provided personalized support to students, offering guidance on
              coding concepts and project development
            </li>
            <li>
              Contributed significantly to developing course materials,
              increasing student engagement and comprehension by 15% through
              dynamic assignments, quizzes, and projects.
            </li>
          </ul>
        </fieldset>
      </div>
    </div>
  );
};

export default Experiences;
