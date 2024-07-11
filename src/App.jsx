import { useState } from "react";
import styles from "./../src/App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const userCard = {
    userName: "Emma Watson",
    userLink: "@EmWatson",
  };

  const linkFooter = [
    { title: "Tweets", count: "1 337" },
    { title: "Following", count: "561" },
    { title: "Followers", count: "500" },
  ];

  const isRenderMale = false;

  function addCount() {
    const [count, setCount] = useState(500);
    setCount(count + 1);
  }

  return (
    <>
      <div className={styles.pageContainerStyle}>
        <Header isRender={isRenderMale} user={userCard} />
        <div className={styles.footerContainer}>
          <button onClick={addCount} className={styles.btnCount}>
            <i class="fa-solid fa-plus"></i>
          </button>
          <Footer userLinkFooter={linkFooter[0]} />
          <Footer userLinkFooter={linkFooter[1]} />
          <Footer userLinkFooter={linkFooter[2]} />
        </div>
      </div>
    </>
  );
}

export default App;
