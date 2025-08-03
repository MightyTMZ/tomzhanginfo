import React from "react";
import styles from "./MaxDotThink.module.css";

const MaxDotThink = () => {
  return (
    <>
      <div className="m-10">
        Named after my role model and former CTO of PayPal:{" "}
        <strong>Max Levchin</strong>{" "}
        <img
          src="https://media.carnegie.org/filer_public_thumbnails/filer_public/ae/4b/ae4bf034-fa8b-4231-83be-d591aca5ca07/levchin_max.jpeg__600x50000_q85_subsampling-2.jpg"
          alt="Max Levchin"
          className={styles.photo}
        />
        Named after my Rove (YC W24) CEO: <strong>Max Morganroth</strong>
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQFymKQ7WX4nOA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700363365365?e=1756944000&v=beta&t=HiwOB_TiiFCvjyDtKabRYVjYriyDY-a2bNKsm6qjMLc"
          alt="Max Morganroth"
          className={styles.photo}
        />
        <h1>What?</h1>
        <p>
          Riddle game that simulates the mental curveballs of elite interviews. 
          Built to stretch how you think, not just what you know. Welcome to the
          mind gym for future founders, hackers, and legends.
        </p>
      </div>
    </>
  );
};

export default MaxDotThink;
