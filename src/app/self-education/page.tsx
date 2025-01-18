import React from "react";
import styles from "./SelfEducation.module.css";
import { educationData } from "@/data/educationData";
import { FaCheckCircle } from "react-icons/fa";

const EducationProgress = () => {
  return (
    <section className={styles.educationSection}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Self Education Progress</h1>
        <p className={styles.titleDescription}>
          I find fulfillment in educating myself and continuously learning
        </p>
      </div>

      {/* Courses Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Courses</h2>
        {educationData.courses.map((course, index) => (
          <div key={index} className={styles.item}>
            {course.completion === 100 ? <FaCheckCircle /> : <></>}
            <span className={styles.courseSpan}>
              <a href={course.reference}>{course.title}</a>
            </span>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${course.completion}%` }}
              ></div>
            </div>
            <span>{course.completion}%</span>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Certifications & Specializations</h2>
        {educationData.certifications.map((cert, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.certSpan}>
              <a href={cert.reference}>
                {cert.completion === 100 ? <FaCheckCircle /> : <></>}
                {cert.title}
              </a>
            </span>
            <div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${cert.completion}%` }}
              ></div>
            </div>
            <span>{cert.completion}%</span>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Skills</h2>
        {educationData.skills.map((skill, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.skillSpan}>{skill.title}</span>
            {/*<div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${skill.completion}%` }}
              ></div>
            </div>
            <span>{skill.completion}%</span>*/}
          </div>
        ))}
      </div>

      {/* Books Section */}
      <div className={styles.section}>
        <h2 className={styles.heading}>Books</h2>
        {educationData.books.map((book, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.bookSpan}>{book.title}</span>
            {/*<div className={styles.progressBar}>
              <div
                className={styles.progress}
                style={{ width: `${book.completion}%` }}
              ></div>
            </div>
            <span>{book.completion}%</span>*/}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationProgress;
