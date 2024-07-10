import userPhoto from "./photo user.jpeg";
import styles from "./Article.module.css";

function Article(props) {
  const { user } = props;

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.headerContainer}>
          <img className={styles.userImg} src={userPhoto} alt="" />
          <div className={styles.nameContainer}>
            <h1 className={styles.userName}>{props.userName}</h1>
            <p className={styles.userLink}>{props.userLink}</p>
          </div>
        </div>
        <div className={styles.containerFooter}>
          <ul className={styles.linkFooterTitle}>
            <li className={styles.titleFooter}>{props.title}</li>
            <li className={styles.titlecounter}>{props.count}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Article;
