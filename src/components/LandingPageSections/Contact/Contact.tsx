"use client";

import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { email } from "@/data/email";
import Link from "next/link";


// Tom Zhang 2.0
// drafts messages for services, hackathon collaborations, (for coding help, my agent will help you HAHA)

const Contact = () => {
  const maxMessageLength = 5000;
  const localStorageKey = "TomZhangContactMessageDraft";

  // State for the message and character count
  const [message, setMessage] = useState("");
  const [charactersRemaining, setCharactersRemaining] =
    useState(maxMessageLength);

  // Load the previous draft from local storage on component mount
  useEffect(() => {
    const savedDraft = localStorage.getItem(localStorageKey);
    if (savedDraft) {
      setMessage(savedDraft);
      setCharactersRemaining(maxMessageLength - savedDraft.length);
    }
  }, []);

  // Handle textarea input changes
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const currentMessage = event.target.value;
    setMessage(currentMessage);
    setCharactersRemaining(maxMessageLength - currentMessage.length);

    // Save the current message to local storage
    localStorage.setItem(localStorageKey, currentMessage);
  };

  // Clear the textarea and remove the saved draft from local storage
  const clearMessage = () => {
    setMessage("");
    setCharactersRemaining(maxMessageLength);
    localStorage.removeItem(localStorageKey);
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.description}>
          Feel free to reach out to me for collaboration, inquiries, or just to
          say hello. I’d love to hear from you!
        </p>
        <form className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <label className={styles.formLabel} htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.formLabel} htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              maxLength={255} // Assuming email addresses won't exceed this length
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.formLabel} htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Type your subject here"
              maxLength={255} // Assuming email addresses won't exceed this length
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.formLabel} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message here..."
              className={styles.formInputTextArea}
              value={message}
              maxLength={maxMessageLength}
              onChange={handleTextareaChange}
              required
            ></textarea>
            <button
              type="button"
              className={styles.clearButton}
              onClick={clearMessage}
            >
              Clear
            </button>
            <p
              className={`${styles.characterCount} ${
                charactersRemaining <= 100 ? styles.warning : ""
              }`}
            >
              {charactersRemaining} characters remaining
            </p>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
        <p className={styles.additionalInfo}>
          Want to send a longer message? Consider sending me an{" "}
          <Link href={`mailto:${email}`} className={styles.emailLink}>
            email
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Contact;
