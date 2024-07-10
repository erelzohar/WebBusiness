import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>שליטה פשוטה בחשבונאות וחיובים.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          מערכת הניהול שלנו מספקת כלי לניהול פרויקטים, תוכן ולניהול חוויות משתמש
          מתקדמות. אנו כאן כדי לספק לך כלים וטכנולוגיות שיכולים לקלות עליך את
          התהליך של בניית האתר או האפליקציה שלך. EZ היא השותף המושלם שלך להגדלת
          הנוכחות הדיגיטלית והשגת מטרות העסק שלך.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="app-store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google-play"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
