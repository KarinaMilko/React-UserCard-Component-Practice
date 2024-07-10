import userPhoto from "./photo user.jpeg";
import styles from "./Header.module.css";

function Header(props) {
  const { user } = props;

  return (
    <>
      <header className={styles.headerContainer}>
        <img className={styles.userImg} src={userPhoto} alt="" />
        <div className={styles.nameContainer}>
          <h1 className={styles.userName}>{user.userName}</h1>
          <p className={styles.userLink}>{user.userLink}</p>
        </div>
      </header>
    </>
  );
}
export default Header;
