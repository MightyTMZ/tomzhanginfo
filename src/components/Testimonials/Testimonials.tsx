"use client";
import Image from "next/image";
import React from "react";
import { testimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.css"; // Import the stylesheet

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.section}>
      <div className="container text-center">
        <h2 className={styles.title}>What People Say</h2>
        <div className="row">
          {testimonials.map((testimonial) => (
            <div className="col-md-4" key={testimonial.id}>
              <div className={styles.card}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.img}
                  width={90}
                  height={90}
                />
                <p className={styles.text}>"{testimonial.text}"</p>
                <h5 className={styles.name}>{testimonial.name}</h5>
                <span className={styles.role}>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
