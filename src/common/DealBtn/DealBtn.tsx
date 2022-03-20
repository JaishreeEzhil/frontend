import React from 'react';
import styles from '../../styles/Button.module.css';

type ResetProps = {
    dealEvent: any
};

const DealBtn: React.FC<ResetProps> = ({ dealEvent }) => {
  
  return (
    <div className={styles.dealBtnContainer}>
        <button className={styles.dealBtn} onClick={() => dealEvent()} >
            Deal
        </button>
    </div>
  );
}

export default DealBtn;