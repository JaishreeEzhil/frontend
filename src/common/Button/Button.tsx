import React from 'react';
import styles from '../../styles/Button.module.css';

type ResetProps = {
    clickEvent: any,
    title: string,
    align: string
};

const Button: React.FC<ResetProps> = ({ clickEvent, title, align }) => {
  
  return (
    <div className={align === "right" ? styles.btnRight: styles.btnCenter}>
        <button className={styles.btn} onClick={() => clickEvent()}>
            {title}
        </button>
    </div>
  );
}

export default Button;