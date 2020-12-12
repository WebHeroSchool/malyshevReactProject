import React from 'react';
import styles from './Contacts.module.css'
import mail from './Icons/mail.png';
import call from './Icons/call.png';
import telegram from './Icons/telegram.png';

const Contacts = () => {
  return(<div className={styles.wrap}>
  <h1 className={styles.title}>Contacts</h1>
  <div className={styles.content}>
  <div className={styles.item}>
  <img src={mail} alt="e-mail" className={styles.icon} />
  <a className={styles.links} href='mailto:malyshev21@gmail.com'>malyshev21@gmail.com</a>
  </div>
  <div className={styles.item}>
  <img src={call} alt="tel" className={styles.icon} />
  <p>+7(921)973-55-44</p>
  </div>
  <div className={styles.item}>
  <img src={telegram} alt="telegram" className={styles.icon} />
  <a className={styles.links} href='https://t.me/malyshevmaxim'>Telegram</a>
  </div>
  </div>
  <div className={styles.mark}>Icons made by <a className={styles.marklink} href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a className={styles.marklink} href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </div>)
}

export default Contacts;