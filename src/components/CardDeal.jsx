import React from 'react';
import { card } from '../assets';
import Button from './Button';
import styles, { layout } from '../style';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>מצא עסקת כרטיס טובה יותר <br className='sm:block hidden'/>בכמה צעדים קלים.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          הרביעי בשבילי מתמקד במאבק הישראלי מוביל חוליל בעקבות, הדרכה מדעי על בדף.
          נוסח כללית בספרות סוציולוגיה עצמאות ביולוגיה.
          כניסה מדריכים ברוכים כלל ויקיפדיה אחרות שפות, רבה דת אחר שנורו יידיש לכאן.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  );
}

export default CardDeal;
