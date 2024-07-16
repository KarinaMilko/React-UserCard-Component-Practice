import styles from "./Footer.module.css";

function Footer(props) {
  const SocialsCount = props.userLinkFooter;

  return (
    <>
      <div className={styles.containerFooter}>
        <ul className={styles.linkFooterTitle}>
          <li>{SocialsCount.title}</li>
          <li className={styles.titlecounter}>{SocialsCount.count}</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
