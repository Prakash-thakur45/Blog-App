import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Prakash Thakur</div>
      <div className={styles.text}>
        PT creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;