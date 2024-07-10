import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const userCard = { userName: "Emma Watson", userLink: "@EmWatson" };

  const linkFooter = [
    { title: "Tweets", count: "1337" },
    { title: "Following", count: "561" },
    { title: "Followers", count: "718" },
  ];
  return (
    <>
      <Header user={userCard} />
      <Footer userLinkFooter={linkFooter[0]} />
      <Footer userLinkFooter={linkFooter[1]} />
      <Footer userLinkFooter={linkFooter[2]} />
    </>
  );
}

export default App;
