import styles from "./../src/App.module.css";
import CardHeader from "./components/CardHeader";
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
      <article className={styles.pageContainerStyle}>
        <CardHeader isRender={isRenderMale} user={userCard} />
        <div className={styles.footerContainer}>
          <button onClick={addCount} className={styles.btnCount}>
            <i class="fa-solid fa-plus"></i>
          </button>
          <Footer userLinkFooter={linkFooter[0]} />
          <Footer userLinkFooter={linkFooter[1]} />
          <Footer userLinkFooter={linkFooter[2]} />
        </div>
      </article>
    </>
  );
}

export default App;
