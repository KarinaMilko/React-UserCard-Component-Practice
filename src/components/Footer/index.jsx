import styles from "./Footer.module.css";

function Footer(props) {
  const userLinkFooter = props.userLinkFooter;

  return (
    <>
      <div className={styles.containerFooter}>
        <ul className={styles.linkFooterTitle}>
          <li>{userLinkFooter.title}</li>
          <li className={styles.titlecounter}>{userLinkFooter.count}</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
