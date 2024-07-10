import Article from "./components/Article";

function App() {
  const userCard = { userName: "Emma Watson", userLink: "@EmWatson" };

  const linkFooter = [
    { title: "Tweets", count: "1337" },
    { title: "Following", count: "561" },
    { title: "Followers", count: "718" },
  ];
  return (
    <>
      <Article user={userCard} />
      <Article userLinkFooter={linkFooter[0]} />
      <Article userLinkFooter={linkFooter[1]} />
      <Article userLinkFooter={linkFooter[2]} />
    </>
  );
}

export default App;
