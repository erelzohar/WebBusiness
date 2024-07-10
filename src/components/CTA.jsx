import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col text-right'>
        <h2 className={styles.heading2}>נסה את EZ עכשיו!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          כל מה שאתה צריך כדי לבנות אתרים ואפליקציות ולגדול עם העסק שלך בכל מקום בעולם.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:mr-10 mr-0`}>
        <Button/>
      </div>
    </section>
  );
}

export default CTA;
