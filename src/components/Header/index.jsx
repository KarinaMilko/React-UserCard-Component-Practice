import { useState } from "react";
import userPhoto from "./photo user.jpeg";
import styles from "./Header.module.css";

function Header(props) {
  const [changeColor, setChangeColor] = useState();
  const { user, isRender } = props;
  const nameStyle = {
    color: isRender ? "blue" : "red",
  };

  const heart = {
    color: changeColor ? "red" : "",
  };
  function changeHeart() {
    setChangeColor(!changeColor);
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <img className={styles.userImg} src={userPhoto} alt="" />
        <div className={styles.nameContainer}>
          <h1 className={styles.userName} style={nameStyle}>
            {user.userName}
          </h1>
          <p>{user.userLink}</p>
          <button
            onClick={changeHeart}
            style={heart}
            className={styles.btnHeard}
          >
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </header>
    </>
  );
}
export default Header;
